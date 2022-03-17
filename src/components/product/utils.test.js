import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { joinIngredients } from './utils'

describe("joinIngredients tests", () => {
    it("not empty test", () => {
        let data = ["one", "two"];
        expect(joinIngredients(data)).toEqual("one, two");
    });

    it("empty test", () => {
        let data = [];
        expect(joinIngredients(data)).toEqual("");
    });

    it("null test", () => {
        expect(joinIngredients(null)).toEqual("");
    });

    it("undefined test", () => {
        let data;
        console.log(Array.isArray(data));
        expect(joinIngredients(data)).toEqual("");
    })
});