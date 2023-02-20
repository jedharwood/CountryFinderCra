import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  return (
    <header className="relative flex flex-wrap items-center justify-between px-6 py-3 shadow-md">
      <nav>
        <div className="mx-auto flex">
          <Link
            to="/"
            className="text-xl font-bold text-slate-800 whitespace-nowrap cursor:pointer hover:underline"
          >
            Where in the world?
          </Link>
        </div>
      </nav>
    </header>
  );
};
