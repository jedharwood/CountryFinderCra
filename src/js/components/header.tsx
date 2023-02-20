import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  return (
    <nav>
      <Link to="/">Where in the world</Link>
    </nav>
  );
};
