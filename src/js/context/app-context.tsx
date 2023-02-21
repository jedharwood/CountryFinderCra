import { createContext } from 'react';
import { type SelectOption, type Country } from '../types/types';

interface IAppContext {
  countries: Country[];
  setInitialState: (countries: Country[]) => void;
  // updateCountries: (countries: Country[]) => void;
  displayCountries: Country[];
  updateDisplayCountries: (countries: Country[]) => void;
  selectedCountry: Country | undefined;
  selectCountry: (country: Country) => void;
  regionOptions: SelectOption[];
  countryNameOptions: SelectOption[];
  loading: boolean;
  updateLoading: (value: boolean) => void;
}

const defaultState: IAppContext = {
  countries: [],
  setInitialState: (): void => {},
  // updateCountries: (): void => {},
  displayCountries: [],
  updateDisplayCountries: (): void => {},
  selectedCountry: undefined,
  selectCountry: (): void => {},
  regionOptions: [],
  countryNameOptions: [],
  loading: true,
  updateLoading: (): void => {},
};

export const AppContext = createContext<IAppContext>(defaultState);
