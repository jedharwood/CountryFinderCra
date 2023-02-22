import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { type Country } from '../types/types';
import { SelectInput } from './select-input';

export const RESET_OPTIONS: string = '**reset-options**';

export const SearchBar: React.FunctionComponent = () => {
  const {
    regionOptions,
    countries,
    updateDisplayCountries,
    countryNameOptions,
  } = useContext(AppContext);

  const regionPlaceholder = 'Select region...';
  const searchPlaceholder = 'Search...';

  const filterByName = (selectValue: string): Country[] => {
    return countries.filter((c) => c.name.common === selectValue);
  };

  const filterByRegion = (selectValue: string): Country[] => {
    return countries.filter((c) => c.region === selectValue);
  };

  const filterCountries = (
    selectValue: string | undefined,
    filterFunction: (selectValue: string) => Country[],
  ): void => {
    if (selectValue === RESET_OPTIONS) {
      updateDisplayCountries(countries);
    } else if (selectValue !== undefined) {
      const filteredCountries = filterFunction(selectValue);
      updateDisplayCountries(filteredCountries);
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <SelectInput
          options={countryNameOptions}
          placeHolder={searchPlaceholder}
          isSearchable={true}
          onChange={(e) => {
            filterCountries(e?.value, filterByName);
          }}
        />
        <SelectInput
          options={regionOptions}
          placeHolder={regionPlaceholder}
          isSearchable={false}
          onChange={(e) => {
            filterCountries(e?.value, filterByRegion);
          }}
        />
      </div>
    </div>
  );
};
