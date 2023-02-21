import React, { useContext, useEffect } from 'react';
import { getCountriesAlphabetically } from '../api/fetch';
import { AppContext } from '../context/app-context';
import { type Country, type SelectOption } from '../types/types';
import { SearchBar } from '../components/search-bar';
import { CountryGrid } from '../components/country-grid';

export const HomePage: React.FunctionComponent = () => {
  const {
    updateCountries,
    updateRegionOptions,
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

  return (
    <div className="bg-gray-100 pt-3">
      <SearchBar />
      <CountryGrid />
    </div>
  );
};
