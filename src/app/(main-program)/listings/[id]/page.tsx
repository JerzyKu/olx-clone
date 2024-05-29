import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <SearchBar />
      <div className="flex">
        <div className="flex-1">
          <Card>galeria</Card>
          <Card>opis</Card>
          <Card>skontaktuj się </Card>
        </div>
        <div className="flex-1 ml-1">
          <Card>
            dodane 15 maja 2024 &#9825; <br />
            szalone zielone kwadrat 100zł do <br />
            negocjacji wyślij wiadomość zadzwoń <br />
          </Card>
          <Card>lokalizacja</Card>
          <Card>prawa konsumenta</Card>
        </div>
      </div>
    </>
  );
}
