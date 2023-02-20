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
    <div className="w-full px-6 py-4 space-x-6 mb-2 flex space-between">
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
  );
};
