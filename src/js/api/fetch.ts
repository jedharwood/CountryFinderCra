export interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flag: string;
}

export const getCountriesAlphabetically = async (): Promise<Country[]> => {
  const countries = await fetch('https://restcountries.com/v3.1/all').then(
    async (res) => await res.json(),
  );

  return countries.sort((a: Country, b: Country) =>
    a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()),
  );
};
