import Link from "next/link";
import { getCountries } from "./actions/data";
import Card from "./components/cards/cards";
import SearchForm from "./components/search/search-form";
import RegionSelector from "./components/selector/region-selector";
import { countryData } from "./interfaces/country";

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
      <Link key={country.name.common} href={`/details/${country.cca2}`}>
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
    <main className="bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG">
      <section className="py-6 px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchForm />
          <RegionSelector />
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mx-auto max-w-screen-xl">
        {cards}
      </section>
    </main>
  );
}
