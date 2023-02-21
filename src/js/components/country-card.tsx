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
  const textRowSize: TextRowSize = { size: 'xs' };

  return (
    <li className="rounded-md shadow-lg" onClick={props.onClick}>
      <Link to={`country/${props.name}`}>
        <div className="block w-full h-1/2 rounded-t-md overflow-hidden hover:opacity-75">
          <img
            src={props.flag.svg}
            alt={props.flag.alt}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-4 text-slate-800 h-fit mb-2">
          <h5 className="text-xl font-bold mb-2">{props.name}</h5>
          {buildTextRow('Capital', props.capital, textRowSize)}
          {buildTextRow('Region', props.region, textRowSize)}
          {buildTextRow('Population', props.population, textRowSize)}
        </div>
      </Link>
    </li>
  );
};
