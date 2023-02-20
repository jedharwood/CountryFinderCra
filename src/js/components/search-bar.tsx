import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { SelectInput } from './select-input';

export const SearchBar: React.FunctionComponent = () => {
  const { regionOptions, countries, updateCountries } = useContext(AppContext);
  const placeholder = 'Select region...';
  const filterCountriesByRegion = (selectValue: string | undefined): void => {
    const filteredCoutries = countries.filter((c) => c.region === selectValue);
    updateCountries(filteredCoutries);
  };

  return (
    <div className="w-full px-2 py-3 mb-3">
      <SelectInput
        options={regionOptions}
        placeHolder={placeholder}
        isSearchable={false}
        onChange={(e) => {
          filterCountriesByRegion(e?.value);
        }}
      />
    </div>
  );
};
