import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  return (
    <header className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 shadow-md">
      <nav>
        <div className="px-4 mx-auto flex">
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
