import '../css/App.css';
import { HomePage } from './pages/home.page';
import { CountryPage } from './pages/country.page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{
    path: '/',
    element: <HomePage />,
},
{
    path: 'country',
    element: <CountryPage />,
},
]);

export const App = () => {
  return <RouterProvider router={router} />;
}
