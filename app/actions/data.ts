export const getCountries = async () => {
  const countryData = await fetch("https://restcountries.com/v3.1/all");

  if (!countryData.ok) {
    throw new Error("Failed to  fetch all country data");
  }

  return countryData.json();
};
