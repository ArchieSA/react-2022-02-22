export function joinIngredients(ingredients = []) {
    if(ingredients !== null && ingredients.length !== 0) {
        const regexp = /^[A-ZА-ЯЁ]+$/i;
        const result = ingredients.filter(ingredient => regexp.test(ingredient));

        return result.length !== 0 ? result.join(', ') : 'Error in recipe';
    }
    
    return 'No recipe';
}