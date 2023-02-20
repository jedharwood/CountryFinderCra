import '../css/App.css';
import { HomePage } from './pages/home.page';
import { CountryPage } from './pages/country.page';
import { NotFoundPage } from './pages/not-found.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { AppContext } from './context/app-context';
import { useState } from 'react';
import { type Country } from './api/fetch';

export const App = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([]);

  const updateCountries = (countryArray: Country[]): void => {
    setCountries(countryArray);
  };

  return (
    <Router>
      <AppContext.Provider
        value={{
          countries,
          updateCountries,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="country" element={<CountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
};
