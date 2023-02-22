import { getCountriesAlphabetically } from '../fetch';
import { type Country } from '../../types/types';

const buildCountryFixture = (name: string): Country => {
  return {
    name: { common: name },
    capital: 'Capital 1',
    region: 'Region 1',
    population: 1,
    flags: { svg: 'svg_1', alt: 'alt_1' },
    subregion: 'Subregion 1',
    unMember: false,
    area: 1,
    coatOfArms: { svg: 'svg_1' },
  };
};

describe('getCountriesAlphabetically', () => {
  const agentina: Country = buildCountryFixture('Argentina');
  const brazil: Country = buildCountryFixture('Brazil');
  const chile: Country = buildCountryFixture('Chile');

  it('should return countries sorted alphabetically', async () => {
    // Arrange
    const countries: Country[] = [chile, agentina, brazil];
    const expected: Country[] = [agentina, brazil, chile];
    const fetchSpy: jest.SpyInstance<Promise<Response>> = jest
      .spyOn(window, 'fetch')
      .mockResolvedValueOnce({
        json: async () => countries,
      } as unknown as Response);

    // Act
    const result = await getCountriesAlphabetically();

    // Assert
    expect(fetchSpy).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
    expect(result).toEqual(expected);
  });

  it('should return an empty array when fetch fails', async () => {
    // Arrange
    const fetchSpy = jest.spyOn(window, 'fetch').mockRejectedValueOnce('Error');

    // Act
    const result = await getCountriesAlphabetically();

    // Assert
    expect(fetchSpy).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
    expect(result).toEqual([]);
  });
});
