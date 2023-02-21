export interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
    alt: string;
  };
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  isSearchable: boolean;
  placeHolder: string;
  options: SelectOption[];
  onChange: (option: SelectOption | null) => void;
}

export interface IAppContext {
  countries: Country[];
  updateCountries: (countries: Country[]) => void;
  displayCountries: Country[];
  updateDisplayCountries: (displayCountries: Country[]) => void;
  regionOptions: SelectOption[];
  updateRegionOptions: (regionOptions: SelectOption[]) => void;
  countryNameOptions: SelectOption[];
  updateCountryNameOptions: (countryNameOptions: SelectOption[]) => void;
}
