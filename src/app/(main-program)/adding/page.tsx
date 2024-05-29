"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AddingOffer({}: Props) {
  const [title, setTitle] = useState("");
  const [isTitleCorrect, setIsTitleCorrect] = useState(true);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (title.length >= 16 || title.length == 0) {
      setIsTitleCorrect(true);
    } else {
      setIsTitleCorrect(false);
    }
    console.log("use effect");
  }, [title]);

  return (
    <>
      <p className="text-2xl font-bold">Dodaj ogłoszenie</p>
      <Card className="flex flex-col">
        <p className=" font-bold">Im więcej szczegółów, tym lepiej!</p>
        <p>Tytuł ogłoszenia*</p>
        <input
          type="text"
          name=""
          id=""
          className={`border-b-4 bg-gray-200 p-4 ${
            isTitleCorrect ? "" : "bg-red-300"
          }`}
          placeholder="np. iPhone 11 na gwarancji"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="text-xs">wpisz przynajmniej 16 znaków</p>
      </Card>
      {/* <Card>
        <p>Zdjęcia Pierwsze zdjęcie będzie zdjęciem głównym. </p>
        <p>Przeciągaj zdjęcia na inne miejsca, aby zmienić ich kolejność.</p>
      </Card> */}
      <Card className="flex flex-col">
        Opis*
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="border-b-4 bg-gray-200 p-4"
          placeholder="Wpisz te informacje, które byłyby ważna dla Ciebie podczas przeglądania tekiego ogłoszenia"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Card>
      {/* <Card>
        <p>Lokalizacja</p>                                                                                              
        <input readOnly
          type="text"
          value={"Warsaw"}
          className={`border-b-4 bg-gray-200 p-4`}
        />
      </Card> */}
      {/* <Card>
        <p className="font-bold">Dane kontaktowe</p>
        <p>Osoba kontaktowa*</p>
        <input readOnly
          type="text"
          value={"Jerzy"}
          className={`border-b-4 bg-gray-200 p-4`}
        />
        <p>Adres e-mail</p>
        <input readOnly
          type="text"
          value={"jerzy@jerzy.jerzy"}
          className={`border-b-4 bg-gray-200 p-4`}
        />
        <p>Numer telefonu</p>
        <input readOnly
          type="text"
          value={"123 123 123"}
          className={`border-b-4 bg-gray-200 p-4`}
        />
      </Card> */}
      <Card className="flex flex-col">
        <button className="ml-auto py-2 px-4 bg-emerald-950 text-white rounded-lg font-bold">
          Dodaj ogłoszenie
        </button>
      </Card>
    </>
  );
}
