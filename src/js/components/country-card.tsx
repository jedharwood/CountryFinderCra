import React from 'react';
import { Link } from 'react-router-dom';

export interface Flag {
  png: string;
  alt: string;
}

interface CountryCardProps {
  name: string;
  flag: Flag;
  capital: string;
  region: string;
  population: number;
}

export const CountryCard: React.FunctionComponent<CountryCardProps> = (
  props: CountryCardProps,
) => {
  const buildTextRow = (label: string, value: string | number): JSX.Element => {
    return (
      <span className="flex text-xs mb-1">
        <p className="pr-1">{label}:</p>
        <p className="text-slate-600">{value}</p>
      </span>
    );
  };

  return (
    <li className="rounded-md shadow-lg">
      <Link
        to={`country/${props.name}`}
        className="block w-full h-1/2 rounded-t-md overflow-hidden hover:opacity-75 cursor-pointer"
      >
        <img
          src={props.flag.png}
          alt={props.flag.alt}
          className="object-cover h-full w-full"
        />
      </Link>
      <div className="p-4 text-slate-800 h-fit mb-2">
        <h5 className="text-xl font-bold mb-2">{props.name}</h5>
        {buildTextRow('Capital', props.capital)}
        {buildTextRow('Region', props.region)}
        {buildTextRow('Population', props.population)}
      </div>
    </li>
  );
};
