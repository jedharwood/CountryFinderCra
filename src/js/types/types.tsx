export interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flag: string;
}

export interface IAppContext {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
}
