import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { CountryCard } from './country-card';
import { type Flag } from './country-card';

export const CountryGrid: React.FunctionComponent = () => {
  const { displayCountries, selectCountry } = useContext(AppContext);
  // const { displayCountries } = useContext(AppContext);

  const countries = displayCountries.map((country) => {
    const flag: Flag = { png: country.flags.png, alt: country.flags.alt };

    const setSelectedCountry = (): void => {
      console.log('ssc');
      selectCountry(country);
    };

    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        flag={flag}
        capital={country.capital}
        region={country.region}
        population={country.population}
        onClick={setSelectedCountry}
      />
    );
  });

  return (
    <div className="container mx-auto p-6">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {countries}
      </ul>
    </div>
  );
};
