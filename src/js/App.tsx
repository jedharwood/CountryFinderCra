import '../css/App.css';
import { HomePage } from './pages/home.page';
import { CountryPage } from './pages/country.page';
import { NotFoundPage } from './pages/not-found.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { AppContext } from './context/app-context';
import { useAppContext } from './context/use-app-context';

export const App = (): JSX.Element => {
  const [state, actions] = useAppContext();

  return (
    <Router>
      <AppContext.Provider value={{ ...state, ...actions }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
};
