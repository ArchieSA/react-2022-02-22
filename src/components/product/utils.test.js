import { joinIngredients } from './utils';

describe('join ingredients function', () => {
  test('test with 0 ingredients', () => {
    expect(joinIngredients([])).toBe('');
  });

  test('test with 1 ingredient', () => {
    expect(joinIngredients(['bread'])).toBe('bread');
  });

  test('test with 3 ingredients', () => {
    expect(joinIngredients(['bread', 'cheese', 'tomatoes'])).toBe(
      'bread, cheese, tomatoes'
    );
  });

  test('test with missing arguments (check error type)', () => {
    expect(() => joinIngredients()).toThrow(TypeError);
  });

  test('test with missing arguments (check error message)', () => {
    expect(() => joinIngredients()).toThrow(
      "Cannot read property 'join' of undefined"
    );
  });

  test('test with invalid argument type (string)', () => {
    expect(() => joinIngredients('tomatoes')).toThrow(TypeError);
  });

  test('test with extra arguments', () => {
    expect(
      joinIngredients(['bread', 'cheese', 'tomatoes'], false, 'restaurant')
    ).toBe('bread, cheese, tomatoes');
  });

  test('test length check', () => {
    expect(joinIngredients(['bread', 'cream'])).toHaveLength(12);
  });
});
