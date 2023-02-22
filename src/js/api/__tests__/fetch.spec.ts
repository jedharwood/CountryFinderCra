import { getCountriesAlphabetically } from '../fetch';
import { type Country } from '../../types/types';
import { buildCountryFixture } from '../../test/fixtures/build-country-fixture';

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
