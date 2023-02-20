import { createContext } from 'react';
import { type Country } from '../api/fetch';

export interface IAppContext {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
}

const defaultState: IAppContext = {
  countries: [],
  updateCountries: function (countries: Country[]): void {
    throw new Error('Function not implemented.');
  },
};

export const AppContext = createContext<IAppContext>(defaultState);
