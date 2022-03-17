export function joinIngredients(ingredients) {
    return Array.isArray(ingredients) ? ingredients.join(', ') : "";
}