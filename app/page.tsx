"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/cards/cards";
import { countryData } from "./interfaces/country";
import { getCountries } from "./actions/data";
import Link from "next/link";

export default function Home() {
  const [countries, setCountries] = useState<countryData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: countryData[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG ">
      <section className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 mobile:gap-10 gap-20 py-4 px-2 mobile:px-20">
        {countries.map((country, index) => (
          <Link key={country.name.common} href={`/details/${country.cca2}`}>
            <Card
              key={index}
              flagSrc={country.flags.svg}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
