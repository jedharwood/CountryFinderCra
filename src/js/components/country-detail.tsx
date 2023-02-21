import React from 'react';
import { type Flag } from './country-card'; // move this guy

interface CountryDetailProps {
  name: string;
  flag: Flag;
  capital: string;
  region: string;
  population: number;
}

export const CountryDetail: React.FunctionComponent<CountryDetailProps> = (
  props: CountryDetailProps,
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
    <div className="rounded-md shadow-lg">
      <div className="block w-full h-1/2 rounded-t-md overflow-hidden hover:opacity-75">
        <img
          src={props.flag.png}
          alt={props.flag.alt}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 text-slate-800 h-fit mb-2">
        <h5 className="text-xl font-bold mb-2">{props.name}</h5>
        {buildTextRow('Capital', props.capital)}
        {buildTextRow('Region', props.region)}
        {buildTextRow('Population', props.population)}
      </div>
    </div>
  );
};
