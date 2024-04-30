"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AddingOffer({}: Props) {
  const [title, setTitle] = useState("");
  const [isTitleCorrect, setIsTitleCorrect] = useState(true);

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
      <Card>
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
      <Card>
        Zdjęcia Pierwsze zdjęcie będzie zdjęciem głównym. <br />
        Przeciągaj zdjęcia na inne miejsca, aby zmienić ich kolejność.
      </Card>
      <Card>
        Opis*
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="border-b-4 bg-gray-200 p-4"
          placeholder="Wpisz te informacje, które byłyby ważna dla Ciebie podczas przeglądania tekiego ogłoszenia"
        ></textarea>
      </Card>
      <Card>Lokalizacja</Card>
      <Card>
        <p>Dane kontaktowe</p>
        <p>Osoba kontaktowa*</p>
        <p>Jerzy</p>
        <p>Adres e-mail</p>
        <p>jerzy@jerzy.jerzy</p>
        <p>Numer telefonu</p>
        <p>123 123 123</p>
      </Card>
      <Card>
        <button className="ml-auto py-2 px-4 bg-emerald-950 text-white">Dodaj ogłoszenie</button>
      </Card>
    </>
  );
}
