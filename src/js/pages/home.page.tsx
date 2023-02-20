import React, { useContext, useEffect } from 'react';
import { getCountriesAlphabetically } from '../api/fetch';
import { AppContext } from '../context/app-context';
import { type Country, type SelectOption } from '../types/types';
import { SearchBar } from '../components/search-bar';

export const HomePage: React.FunctionComponent = () => {
  const {
    updateCountries,
    updateRegionOptions,
    displayCountries,
    updateDisplayCountries,
    updateCountryNameOptions,
  } = useContext(AppContext);

  useEffect(() => {
    const getCountriesAsync = async (): Promise<void> => {
      try {
        const result = await getCountriesAlphabetically();
        updateCountries(result);
        updateDisplayCountries(result);
        const regions = mapRegionOptions(result);
        updateRegionOptions(regions);
        const countryNames = mapCountryNameOptions(result);
        updateCountryNameOptions(countryNames);
      } catch (e) {
        console.log(e);
      }
    };
    void getCountriesAsync();
  }, []);

  const mapRegionOptions = (countries: Country[]): SelectOption[] => {
    const uniqueRegions = [...new Set(countries.map((c) => c.region))];

    return uniqueRegions.map((u) => {
      return { value: u, label: u };
    });
  };

  const mapCountryNameOptions = (countries: Country[]): SelectOption[] => {
    return countries.map((c) => {
      return { value: c.name.common, label: c.name.common };
    });
  };

  const countriesList = displayCountries.map((c) => {
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
      <SearchBar />
      <ul>{countriesList}</ul>
    </>
  );
};
