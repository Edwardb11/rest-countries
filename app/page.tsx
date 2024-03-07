import Link from "next/link";
import { getCountries } from "./actions/data";
import Card from "./components/cards/cards";
import SearchForm from "./components/search/search-form";
import RegionSelector from "./components/selector/region-selector";

interface countryData {
  cca2: string;
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { country?: string; region?: string };
}) {
  const countries: countryData[] = await getCountries();
  let filteredCountries: countryData[];
  if (!!searchParams?.region && !!searchParams?.country) {
    const term = searchParams?.country;
    const searchTerm = term ? term[0].toUpperCase() + term.slice(1) : "";
    filteredCountries = countries.filter(
      (country) =>
        country.name.common.includes(searchTerm) &&
        country.region == searchParams.region
    );
  } else if (!!searchParams?.region) {
    filteredCountries = countries.filter(
      (country) => country.region == searchParams.region
    );
  } else if (!!searchParams?.country) {
    const term = searchParams?.country;
    const searchTerm = term ? term[0].toUpperCase() + term.slice(1) : "";
    filteredCountries = countries.filter((country) =>
      country.name.common.includes(searchTerm)
    );
  } else {
    filteredCountries = countries;
  }

  filteredCountries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else {
      return 1;
    }
  });

  const cards = filteredCountries.map((country: countryData) => {
    return (
      <Link key={country.name.common} href={`/detail/${country.cca2}`}>
        <Card
          flagSrc={country.flags.svg}
          countryName={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    );
  });

  return (
    <main className="bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG ">
      <section className="py-10 px-4 mobile:px-10 desktop:px-20">
        <div className="flex flex-col mobile:flex-row justify-between mobile:items-top gap-4">
          <SearchForm />
          <RegionSelector />
        </div>
      </section>
      <section className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 mobile:gap-10 gap-20 py-4 px-2 mobile:px-20">
        {cards}
      </section>
    </main>
  );
}
