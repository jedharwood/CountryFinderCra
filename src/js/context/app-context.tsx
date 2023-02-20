import { createContext } from 'react';
import {
  type SelectOption,
  type Country,
  type IAppContext,
} from '../types/types';

const defaultState: IAppContext = {
  countries: [],
  updateCountries: (countries: Country[]): void => {
    throw new Error('Function not implemented.');
  },
  displayCountries: [],
  updateDisplayCountries: (displayCountries: Country[]): void => {
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
