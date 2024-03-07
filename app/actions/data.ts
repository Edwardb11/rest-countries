export const getCountries = async () => {
  const countryData = await fetch("https://restcountries.com/v3.1/all");

  if (!countryData.ok) {
    throw new Error("Failed to  fetch all country data");
  }

  return countryData.json();
};

export const getCountryByCode = async (code: string) => {
  const country = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (!country.ok) {
    throw new Error("Failed to fetch detailed country data");
  }

  return country.json();
};

export const getCountryNameByCode = async (codes: string[]) => {
  if (!codes) {
    return null;
  }
  const names = await Promise.all(
    codes.map(async (code) => {
      const countryName = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca2`
      );

      if (!countryName.ok) {
        throw new Error("Failed to fetch detailed country data");
      }

      return countryName.json();
    })
  );
  return names;
};
