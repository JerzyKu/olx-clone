import { listings } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const filteredListings = listings.filter(
    (el) => el.id.toString() === params.id
  );

  if (filteredListings.length > 0) {
    return Response.json(filteredListings[0]);
  }
  return new Response(JSON.stringify({ msg: "no listing with this ID" }), {
    status: 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const index = listings.findIndex(
    (listing) => listing.id.toString() === params.id
  );

  if (index === -1) {
    return new Response(JSON.stringify({ msg: "no listing with this ID" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log("insex: ", index);

  listings[index] = { ...listings[index], ...body };

  return Response.json(listings[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = listings.findIndex(
    (listing) => listing.id.toString() === params.id
  );
  if (index === -1) {
    return new Response(JSON.stringify({ msg: "no listing with this ID" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const deletedListing = listings[index];
  listings.splice(index, 1);

  return Response.json(deletedListing);
}
