import Card from "@/components/Card";
import React from "react";

type Props = {};

export default function AddingOffer({}: Props) {
  return (
    <>
      Dodaj ogłoszenie
      <Card>
        <p>Im więcej szczegółów, tym lepiej!</p>
        <p>Tytuł ogłoszenia*</p>
        <input
          type="text"
          name=""
          id=""
          className="border-b-4 bg-gray-200 p-4"
          placeholder="np. iPhone 11 na gwarancji"
        />
        wpisz przynajmniej 16 znaków
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
      <Card>Dane kontaktowe</Card>
      <Card>guziki</Card>
    </>
  );
}
