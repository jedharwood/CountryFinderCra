import { createContext } from 'react';
import { type SelectOption, type Country } from '../types/types';

interface IAppContext {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
  displayCountries: Country[];
  updateDisplayCountries: (displayCountries: Country[]) => void;
  selectedCountry: Country | undefined;
  selectCountry: (country: Country) => void;
  regionOptions: SelectOption[];
  updateRegionOptions: (regionOptions: SelectOption[]) => void;
  countryNameOptions: SelectOption[];
  updateCountryNameOptions: (countryNameOptions: SelectOption[]) => void;
}

const defaultState: IAppContext = {
  countries: [],
  updateCountries: (countries: Country[]): void => {
    throw new Error('Function not implemented.');
  },
  displayCountries: [],
  updateDisplayCountries: (displayCountries: Country[]): void => {
    throw new Error('Function not implemented.');
  },
  selectedCountry: undefined,
  selectCountry: (country: Country): void => {
    throw new Error('Function not implemented.');
  },
  regionOptions: [],
  updateRegionOptions: (regionOptions: SelectOption[]): void => {
    throw new Error('Function not implemented.');
  },
  countryNameOptions: [],
  updateCountryNameOptions: (countryNameOptions: SelectOption[]): void => {
    throw new Error('Function not implemented.');
  },
};

export const AppContext = createContext<IAppContext>(defaultState);
