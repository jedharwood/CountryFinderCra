import { useMemo, useState } from 'react';
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
  resetInitialState: () => void;
  //   updateCountries: (countryArray: Country[]) => void;
  updateDisplayCountries: (displayCountryArray: Country[]) => void;
  selectCountry: (country: Country) => void;
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [displayCountries, setDisplayCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [loading, setLoading] = useState<boolean>(true);
  const regionOptions = useMemo(() => {
    const uniqueRegions = [...new Set(countries.map((c) => c.region))];
    return uniqueRegions.map((u) => ({ value: u, label: u }));
  }, [countries]);
  const countryNameOptions = useMemo(() => {
    return countries.map((c) => ({
      value: c.name.common,
      label: c.name.common,
    }));
  }, [countries]);

  const setInitialState = (countries: Country[]): void => {
    setCountries(countries);
    setDisplayCountries(countries);
    setLoading(false);
  };

  const resetInitialState = (): void => {
    setDisplayCountries([]);
    setLoading(true);
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
    resetInitialState,
    // updateCountries,
    updateDisplayCountries,
    selectCountry,
  };

  return [state, actions];
};
