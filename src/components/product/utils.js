export function joinIngredients(ingredients = []) {
    if(ingredients.length !== 0) {
        return ingredients.join(', ');
    }
    else return 'No recipe'; 
}