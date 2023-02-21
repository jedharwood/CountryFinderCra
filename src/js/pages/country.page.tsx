import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { CountryDetail } from '../components/country-detail';
import { type Flag } from '../components/country-card';

export const CountryPage: React.FunctionComponent = () => {
  const { selectedCountry } = useContext(AppContext);

  if (selectedCountry !== undefined) {
    const flag: Flag = {
      png: selectedCountry.flags.png,
      alt: selectedCountry.flags.alt,
    };

    return (
      <CountryDetail
        name={selectedCountry.name.common}
        flag={flag}
        capital={selectedCountry.capital}
        region={selectedCountry.region}
        population={selectedCountry.population}
      />
    );
  } else {
    return <h1>No country selected</h1>;
  }
};
