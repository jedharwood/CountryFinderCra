import { createContext } from 'react';
import {
  type SelectOption,
  type Country,
  type IAppContext,
} from '../types/types';

const defaultState: IAppContext = {
  countries: [],
  updateCountries: function (countries: Country[]): void {
    throw new Error('Function not implemented.');
  },
  regionOptions: [],
  updateRegionOptions: function (regionOptions: SelectOption[]): void {
    throw new Error('Function not implemented.');
  },
};

export const AppContext = createContext<IAppContext>(defaultState);
