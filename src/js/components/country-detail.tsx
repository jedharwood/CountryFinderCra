import React from 'react';
import { type Flag } from '../types/types';
import { buildTextRow, type TextRowSize } from './helpers/build-text-row';

interface CountryDetailProps {
  name: string;
  flag: Flag;
  capital: string;
  region: string;
  population: number;
  subregion: string;
  unMember: boolean;
  area: number;
  coatOfArms: string;
}

export const CountryDetail: React.FunctionComponent<CountryDetailProps> = (
  props: CountryDetailProps,
) => {
  const {
    name,
    flag,
    capital,
    region,
    population,
    subregion,
    unMember,
    area,
    coatOfArms,
  } = props;
  const textRowSize: TextRowSize = { size: 'm' };

  const isUnMemberState = (): string => {
    return unMember
      ? `${name} is a member of the UN`
      : `${name} is not a member of the UN`;
  };

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 text-slate-800">
        <img
          src={flag.svg}
          alt={flag.alt}
          className="object-cover w-full rounded-lg shadow-md"
        />
        <div className="h-fit mb-2">
          <h5 className="text-2xl font-bold mb-2">{name}</h5>
          {buildTextRow('Capital', capital, textRowSize)}
          {buildTextRow('Region', region, textRowSize)}
          {buildTextRow('Sub-region', subregion, textRowSize)}
          {buildTextRow('Population', population, textRowSize)}
          {buildTextRow('Memberships', isUnMemberState(), textRowSize)}
          {buildTextRow('Area (sq  miles)', area, textRowSize)}
        </div>
        <span>
          <div className="flex justify-center">
            <h5 className="text-xl font-bold mb-2">Coat of arms</h5>
          </div>
          <div className="flex justify-center">
            <img
              src={coatOfArms}
              alt={`The coat of arms for ${name}`}
              className="object-cover w-1/2 rounded-lg"
            />
          </div>
        </span>
      </div>
    </div>
  );
};
