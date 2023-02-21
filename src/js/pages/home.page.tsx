import React, { useContext, useEffect, useState } from 'react';
import { getCountriesAlphabetically } from '../api/fetch';
import { AppContext } from '../context/app-context';
import { SearchBar } from '../components/search-bar';
import { CountryGrid } from '../components/country-grid';
import { Spinner } from '../components/spinner';

export const HomePage: React.FunctionComponent = () => {
  const { setInitialState } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountriesAsync = async (): Promise<void> => {
      try {
        const countries = await getCountriesAlphabetically();
        setInitialState(countries);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    void getCountriesAsync();
  }, [setInitialState]);

  return (
    <div className="bg-gray-100 pt-3">
      <SearchBar />
      <Spinner isVisible={loading} />
      <CountryGrid />
    </div>
  );
};
