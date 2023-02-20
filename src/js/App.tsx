import '../css/App.css';
import { HomePage } from './pages/home.page';
import { CountryPage } from './pages/country.page';
import { NotFoundPage } from './pages/not-found.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';

export const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="country" element={<CountryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
