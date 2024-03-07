export interface countryData {
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

export interface CountryProps {
  name: {
    common: string;
    official: string;
    nativeName: {};
  };
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {};
  languages: {};
  borders: string[];
}

export type NameObject = {
  official: string;
  common?: string;
};
