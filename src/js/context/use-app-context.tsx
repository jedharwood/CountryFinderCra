import { useState } from 'react';
import { type SelectOption, type Country } from '../types/types';

interface IAppContextState {
  countries: Country[];
  displayCountries: Country[];
  selectedCountry: Country | undefined;
  regionOptions: SelectOption[];
  countryNameOptions: SelectOption[];
}

interface IAppContextActions {
  updateCountries: (countryArray: Country[]) => void;
  updateDisplayCountries: (displayCountryArray: Country[]) => void;
  selectCountry: (country: Country) => void;
  updateRegionOptions: (regionOptionArray: SelectOption[]) => void;
  updateCountryNameOptions: (countryNameOptionArray: SelectOption[]) => void;
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [displayCountries, setDisplayCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [regionOptions, setRegionOptions] = useState<SelectOption[]>([]);
  const [countryNameOptions, setCountryNameOptions] = useState<SelectOption[]>(
    [],
  );

  const updateCountries = (countryArray: Country[]): void => {
    setCountries(countryArray);
  };

  const updateDisplayCountries = (displayCountryArray: Country[]): void => {
    setDisplayCountries(displayCountryArray);
  };

  const selectCountry = (country: Country): void => {
    setSelectedCountry(country);
  };

  const updateRegionOptions = (regionOptionArray: SelectOption[]): void => {
    setRegionOptions(regionOptionArray);
  };

  const updateCountryNameOptions = (
    countryNameOptionArray: SelectOption[],
  ): void => {
    setCountryNameOptions(countryNameOptionArray);
  };

  const state: IAppContextState = {
    countries,
    displayCountries,
    selectedCountry,
    regionOptions,
    countryNameOptions,
  };

  const actions: IAppContextActions = {
    updateCountries,
    updateDisplayCountries,
    selectCountry,
    updateRegionOptions,
    updateCountryNameOptions,
  };

  return [state, actions];
};
