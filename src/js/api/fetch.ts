import { type Country } from '../types/types';

export const getCountriesAlphabetically = async (): Promise<Country[]> => {
  try {
    const countries = await fetch('https://restcountries.com/v3.1/all').then(
      async (res) => await res.json(),
    );
    return countries.sort((a: Country, b: Country) =>
      a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()),
    );
  } catch (error) {
    // console.error('Error fetching countries', error);
    return [];
  }
};
