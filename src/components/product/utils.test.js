import {joinIngredients} from "./utils";

it('joinIngredients is string test', function () {
    expect(joinIngredients(["one", "two"])).toBe("one, two")
});

it('joinIngredients empty string test', function () {
    expect(joinIngredients([])).toBe("")
});

