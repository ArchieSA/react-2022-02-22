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
});