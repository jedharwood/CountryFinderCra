import React, { useEffect, useState } from 'react';
import { type Country, getCountriesAlphabetically } from '../api/fetch';
import { SearchBar } from '../components/search-bar';

export const HomePage: React.FunctionComponent = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountriesAsync = async (): Promise<void> => {
      try {
        const result = await getCountriesAlphabetically();
        setCountries(result);
      } catch (e) {
        console.log(e);
      }
    };
    void getCountriesAsync();
  }, []);

  const countriesList = countries.map((c) => {
    return (
      <>
        <SearchBar />
        <li key={c.name.common}>
          <h1>{c.name.common}</h1>
          <p>{c.capital}</p>
          <p>{c.region}</p>
          <p>{c.population}</p>
          <p>{c.flag}</p>
        </li>
      </>
    );
  });

  return <ul>{countriesList}</ul>;
};
