import { useState } from 'react';
import { type SelectOption, type Country } from '../types/types';

interface IAppContextState {
  countries: Country[];
  displayCountries: Country[];
  selectedCountry: Country | undefined;
  regionOptions: SelectOption[];
  countryNameOptions: SelectOption[];
  loading: boolean;
}

interface IAppContextActions {
  setInitialState: (countries: Country[]) => void;
  //   updateCountries: (countryArray: Country[]) => void;
  updateDisplayCountries: (displayCountryArray: Country[]) => void;
  selectCountry: (country: Country) => void;
  updateLoading: (value: boolean) => void;
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [displayCountries, setDisplayCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [regionOptions, setRegionOptions] = useState<SelectOption[]>([]);
  const [countryNameOptions, setCountryNameOptions] = useState<SelectOption[]>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(true);

  const setInitialState = (countries: Country[]): void => {
    setCountries(countries);
    setDisplayCountries(countries);
    mapRegionOptions(countries);
    mapCountryNameOptions(countries);
  };

  //   const updateCountries = (countryArray: Country[]): void => {
  //     setCountries(countryArray);
  //   };

  const updateDisplayCountries = (displayCountryArray: Country[]): void => {
    setDisplayCountries(displayCountryArray);
  };

  const selectCountry = (country: Country): void => {
    setSelectedCountry(country);
  };

  const mapRegionOptions = (countries: Country[]): void => {
    const uniqueRegions = [...new Set(countries.map((c) => c.region))];
    const options = uniqueRegions.map((u) => {
      return { value: u, label: u };
    });

    setRegionOptions(options);
  };

  const mapCountryNameOptions = (countries: Country[]): void => {
    const options = countries.map((c) => {
      return { value: c.name.common, label: c.name.common };
    });

    setCountryNameOptions(options);
  };

  const updateLoading = (value: boolean): void => {
    setLoading(value);
  };

  const state: IAppContextState = {
    countries,
    displayCountries,
    selectedCountry,
    regionOptions,
    countryNameOptions,
    loading,
  };

  const actions: IAppContextActions = {
    setInitialState,
    // updateCountries,
    updateDisplayCountries,
    selectCountry,
    updateLoading,
  };

  return [state, actions];
};
