import {joinIngredients} from './utils'

const arrOneElement = ['bread']
const arrElements = ['bread', 'cheese', 'tomatoes', 'chicken']
const arrNull = null
const arrUndef = undefined
const arrEmpty = []

test('adds 1 ingredient', () => {
    expect(joinIngredients(arrOneElement)).toBe('bread');
  });

  test('adds more than 1 ingredients', () => {
    expect(joinIngredients(arrElements)).toBe('bread, cheese, tomatoes, chicken');
  });

  test('if array is null', () => {
    expect(joinIngredients(arrNull)).toBe('');
  });

  test('if array is undefined', () => {
    expect(joinIngredients(arrUndef)).toBe('');
  });

  test('if array is empty', () => {
    expect(joinIngredients(arrEmpty)).toBe('');
  });
