import { createContext } from 'react';
import { type SelectOption, type Country } from '../types/types';

interface IAppContext {
  countries: Country[];
  setInitialState: (countries: Country[]) => void;
  resetInitialState: () => void;
  displayCountries: Country[];
  updateDisplayCountries: (countries: Country[]) => void;
  selectedCountry: Country | undefined;
  selectCountry: (country: Country) => void;
  regionOptions: SelectOption[];
  countryNameOptions: SelectOption[];
  loading: boolean;
}

const defaultState: IAppContext = {
  countries: [],
  setInitialState: (): void => {},
  resetInitialState: (): void => {},
  displayCountries: [],
  updateDisplayCountries: (): void => {},
  selectedCountry: undefined,
  selectCountry: (): void => {},
  regionOptions: [],
  countryNameOptions: [],
  loading: true,
};

export const AppContext = createContext<IAppContext>(defaultState);
