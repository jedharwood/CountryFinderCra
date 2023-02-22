import { renderHook, act } from '@testing-library/react-hooks';
import { type SelectOption, type Country } from '../../types/types';
import { useAppContext } from '../use-app-context';
import { buildCountryFixture } from '../../test/fixtures/build-country-fixture';

describe('useAppContext', () => {
  const countryOne: string = 'Country 1';
  const countryTwo: string = 'Country 2';
  const regionOne: string = 'Region 1';
  const regionTwo: string = 'Region 2';
  const expectedCountries: Country[] = [
    buildCountryFixture(countryOne, regionOne),
    buildCountryFixture(countryTwo, regionTwo),
  ];
  const expectedRegionOptions: SelectOption[] = [
    { label: regionOne, value: regionOne },
    { label: regionTwo, value: regionTwo },
  ];
  const expectedCountryNameOptions: SelectOption[] = [
    { label: countryOne, value: countryOne },
    { label: countryTwo, value: countryTwo },
  ];

  describe('defaultValues', () => {
    it('should use the default context values when no provider is available', () => {
      // Arrange
      const { result } = renderHook(() => useAppContext());

      // Assert
      const currentState = result.current[0];
      expect(currentState).toEqual({
        countries: [],
        displayCountries: [],
        selectedCountry: undefined,
        regionOptions: [],
        countryNameOptions: [],
        loading: true,
      });
      expect(result.current[1].setInitialState).toBeDefined();
      expect(result.current[1].resetInitialState).toBeDefined();
      expect(result.current[1].updateDisplayCountries).toBeDefined();
      expect(result.current[1].selectCountry).toBeDefined();
    });
  });

  describe('setInitialState', () => {
    it('should set the countries, displayCountries, loading and options state correctly', () => {
      // Arrange
      const { result } = renderHook(() => useAppContext());

      // Act
      act(() => {
        result.current[1].setInitialState(expectedCountries);
      });

      // Assert
      const currentState = result.current[0];
      expect(currentState).toEqual({
        countries: expectedCountries,
        displayCountries: expectedCountries,
        selectedCountry: undefined,
        regionOptions: expectedRegionOptions,
        countryNameOptions: expectedCountryNameOptions,
        loading: false,
      });
    });
  });

  describe('resetInitialState', () => {
    it('should unset displayCountries, set loading to true and not affect the options', () => {
      // Arrange
      const { result } = renderHook(() => useAppContext());
      act(() => {
        result.current[1].setInitialState(expectedCountries);
      });

      // Act
      act(() => {
        result.current[1].resetInitialState();
      });

      // Assert
      const currentState = result.current[0];
      expect(currentState).toEqual({
        countries: expectedCountries,
        displayCountries: [],
        selectedCountry: undefined,
        regionOptions: expectedRegionOptions,
        countryNameOptions: expectedCountryNameOptions,
        loading: true,
      });
    });
  });

  describe('updateDisplayCountries', () => {
    it('should update displayCountries and not affect other state', () => {
      // Arrange
      const { result } = renderHook(() => useAppContext());
      act(() => {
        result.current[1].setInitialState(expectedCountries);
      });
      const expectedDisplayCountries: Country[] = [expectedCountries[0]];

      // Act
      act(() => {
        result.current[1].updateDisplayCountries(expectedDisplayCountries);
      });

      // Assert
      const currentState = result.current[0];
      expect(currentState).toEqual({
        countries: expectedCountries,
        displayCountries: expectedDisplayCountries,
        selectedCountry: undefined,
        regionOptions: expectedRegionOptions,
        countryNameOptions: expectedCountryNameOptions,
        loading: false,
      });
    });
  });

  describe('selectCountry', () => {
    it('should update selectedCountry and not affect other state', () => {
      // Arrange
      const { result } = renderHook(() => useAppContext());
      act(() => {
        result.current[1].setInitialState(expectedCountries);
      });
      const country: Country = expectedCountries[0];

      // Act
      act(() => {
        result.current[1].selectCountry(country);
      });

      // Assert
      const currentState = result.current[0];
      expect(currentState).toEqual({
        countries: expectedCountries,
        displayCountries: expectedCountries,
        selectedCountry: country,
        regionOptions: expectedRegionOptions,
        countryNameOptions: expectedCountryNameOptions,
        loading: false,
      });
    });
  });
});
