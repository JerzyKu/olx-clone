import React from "react";
import Card from "./Card";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <>
      <Card className="flex flex-row p-0 items-center">
        <div className=" ">&#x1F50D;</div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Znajdź coś dla siebie"
          className="block flex-1"
        />

        <button type="button" className="block p-3  bg-emerald-950 text-white font-bold">
          Szukaj &#x1F50D;
        </button>
      </Card>
    </>
  );
}
