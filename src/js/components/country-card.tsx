import React from 'react';
import { Link } from 'react-router-dom';
import { type Flag } from '../types/types';
import { buildTextRow, type TextRowSize } from './helpers/build-text-row';

interface CountryCardProps {
  name: string;
  flag: Flag;
  capital: string;
  region: string;
  population: number;
  onClick?: () => void;
}

export const CountryCard: React.FunctionComponent<CountryCardProps> = (
  props: CountryCardProps,
) => {
  const { name, flag, capital, region, population, onClick } = props;
  const textRowSize: TextRowSize = { size: 'xs' };

  return (
    <li className="rounded-md shadow-lg" onClick={onClick}>
      <Link to={`country/${name}`}>
        <div className="block w-full h-1/2 rounded-t-md overflow-hidden hover:opacity-75">
          <img
            src={flag.svg}
            alt={flag.alt}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-4 text-slate-800 h-fit mb-2">
          <h5 className="text-xl font-bold mb-2">{name}</h5>
          {buildTextRow('Capital', capital, textRowSize)}
          {buildTextRow('Region', region, textRowSize)}
          {buildTextRow('Population', population, textRowSize)}
        </div>
      </Link>
    </li>
  );
};
