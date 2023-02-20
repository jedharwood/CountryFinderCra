import React, { useContext, useEffect } from 'react';
import { getCountriesAlphabetically } from '../api/fetch';
import { AppContext } from '../context/app-context';

export const HomePage: React.FunctionComponent = () => {
  const { countries, updateCountries } = useContext(AppContext);

  useEffect(() => {
    const getCountriesAsync = async (): Promise<void> => {
      try {
        const result = await getCountriesAlphabetically();
        updateCountries(result);
      } catch (e) {
        console.log(e);
      }
    };
    void getCountriesAsync();
  }, []);

  const countriesList = countries.map((c) => {
    return (
      <li key={c.name.common}>
        <h1>{c.name.common}</h1>
        <p>{c.capital}</p>
        <p>{c.region}</p>
        <p>{c.population}</p>
        <p>{c.flag}</p>
      </li>
    );
  });

  return (
    <>
      <ul>{countriesList}</ul>
    </>
  );
};
