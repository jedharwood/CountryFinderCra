import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { CountryCard } from './country-card';
import { type Flag } from './country-card';

export const CountryGrid: React.FunctionComponent = () => {
  const { displayCountries } = useContext(AppContext);

  const countries = displayCountries.map((c) => {
    const flag: Flag = { png: c.flags.png, alt: c.flags.alt };

    return (
      <CountryCard
        key={c.name.common}
        name={c.name.common}
        flag={flag}
        capital={c.capital}
        region={c.region}
        population={c.population}
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
