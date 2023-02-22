import React, { useContext, useEffect } from 'react';
import { getCountriesAlphabetically } from '../api/fetch';
import { AppContext } from '../context/app-context';
import { SearchBar } from '../components/search-bar';
import { CountryGrid } from '../components/country-grid';
import { Spinner } from '../components/spinner';

export const HomePage: React.FunctionComponent = () => {
  const { resetInitialState, setInitialState } = useContext(AppContext);

  useEffect(() => {
    const getCountriesAsync = async (): Promise<void> => {
      try {
        resetInitialState();
        const countries = await getCountriesAlphabetically();
        setInitialState(countries);
      } catch (e) {
        console.log(e);
      }
    };
    void getCountriesAsync();
  }, []);

  return (
    <div className="bg-gray-100 pt-3">
      <SearchBar />
      <Spinner />
      <CountryGrid />
    </div>
  );
};
