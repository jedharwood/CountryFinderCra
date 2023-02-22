import { type Country } from '../../types/types';

export const buildCountryFixture = (
  name: string,
  region: string = 'Region 1',
): Country => {
  return {
    name: { common: name },
    capital: 'Capital 1',
    region,
    population: 1,
    flags: { svg: 'svg_1', alt: 'alt_1' },
    subregion: 'Subregion 1',
    unMember: false,
    area: 1,
    coatOfArms: { svg: 'svg_1' },
  };
};
