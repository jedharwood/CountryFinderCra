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
  updateCountries: (): void => {},
  displayCountries: [],
  updateDisplayCountries: (): void => {},
  selectedCountry: undefined,
  selectCountry: (): void => {},
  regionOptions: [],
  updateRegionOptions: (): void => {},
  countryNameOptions: [],
  updateCountryNameOptions: (): void => {},
};

export const AppContext = createContext<IAppContext>(defaultState);
