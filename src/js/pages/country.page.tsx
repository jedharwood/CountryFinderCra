import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { CountryDetail } from '../components/country-detail';
import { type Flag } from '../types/types';
import { NoCountryDetail } from '../components/no-country-detail';

export const CountryPage: React.FunctionComponent = () => {
  const { selectedCountry } = useContext(AppContext);

  if (selectedCountry !== undefined) {
    const flag: Flag = {
      svg: selectedCountry.flags.svg,
      alt: selectedCountry.flags.alt,
    };

    return (
      <CountryDetail
        name={selectedCountry.name.common}
        flag={flag}
        capital={selectedCountry.capital}
        region={selectedCountry.region}
        population={selectedCountry.population}
        subregion={selectedCountry.subregion}
        unMember={selectedCountry.unMember}
        area={selectedCountry.area}
        coatOfArms={selectedCountry.coatOfArms.svg}
      />
    );
  } else {
    return <NoCountryDetail text="Country not found" />;
  }
};
