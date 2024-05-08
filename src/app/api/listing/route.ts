import { NextRequest } from "next/server";
import { listings } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  return Response.json(listings);
}

export async function POST(request: Request) {
  const listing = await request.json();

  if (listing?.title === undefined || listing?.body === undefined){
    return new Response(JSON.stringify({ msg: "all fields are required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const newListing = {
    id: listings.length + 1,
    ...listing
  };

  listings.push(newListing);

  return new Response(JSON.stringify(newListing), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
