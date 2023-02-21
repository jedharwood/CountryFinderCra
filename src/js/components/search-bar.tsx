import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { SelectInput } from './select-input';

export const SearchBar: React.FunctionComponent = () => {
  const {
    regionOptions,
    countries,
    updateDisplayCountries,
    countryNameOptions,
  } = useContext(AppContext);

  const regionPlaceholder = 'Select region...';
  const searchPlaceholder = 'Search...';

  const filterCountriesByRegion = (selectValue: string | undefined): void => {
    const filteredCoutries = countries.filter((c) => c.region === selectValue);
    updateDisplayCountries(filteredCoutries);
  };

  const filterCountriesByName = (selectValue: string | undefined): void => {
    const filteredCoutries = countries.filter(
      (c) => c.name.common === selectValue,
    );
    updateDisplayCountries(filteredCoutries);
  };

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <SelectInput
          options={countryNameOptions}
          placeHolder={searchPlaceholder}
          isSearchable={true}
          onChange={(e) => {
            filterCountriesByName(e?.value);
          }}
        />
        <SelectInput
          options={regionOptions}
          placeHolder={regionPlaceholder}
          isSearchable={false}
          onChange={(e) => {
            filterCountriesByRegion(e?.value);
          }}
        />
      </div>
    </div>
  );
};
