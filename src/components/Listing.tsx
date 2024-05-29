import Link from "next/link";
import React from "react";

type Props = {};

export default function Listing({}: Props) {
  return (
    <Link href={`/listings/${'test'}`}>
      <div className="bg-white h-40 my-2 p-2 flex">
        <div className="bg-green-400 w-44"> img </div>
        <div className="flex flex-1 flex-col p-2">
          <div className="flex">
            <div className="flex-1 text-xl">Niezwykły zielony kwadrat</div>
            <div className="">100 zł</div>
          </div>
          <div className="flex-1">
            <div className="bg-[#f2f4f5] w-min text-nowrap rounded py-1 px-3">
              nowy
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 font-light">Warszawa - 11 maja 2023</div>
            <div className="text-xl">&#9825;</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
