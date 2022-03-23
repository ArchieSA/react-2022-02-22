import { joinIngredients } from './utils';

describe("Utils", () => {
    test("ingredients can be joined", () => {
        const ingredients = ['bread', 'beef'];
        const result = joinIngredients(ingredients);
        expect(result).toBe('bread, beef');
    });
    
    test("If ingredients is underfined then can be return No recipe", () => {
        const result = joinIngredients();
        expect(result).toBe('No recipe');
    });

    test("If ingredients is null then can be return No recipe", () => {
        const result = joinIngredients(null);
        expect(result).toBe('No recipe');
    });

    test("If ingredients have wrong data then can be return correct recipe", () => {
        const wrongRecipe = [1, '2', 'bread', '', 'beef'];
        const correct = joinIngredients(wrongRecipe);
        expect(correct).toBe('bread, beef');
    });

    test('test length check', () => {
        expect(joinIngredients(['bread', 'beef'])).toHaveLength(11);
      });
});