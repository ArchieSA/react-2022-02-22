import React from 'react';
import { render, screen } from '@testing-library/react'
import { Rate } from './component'

describe("Rate tests", () => {
    it("render Rate", () => {
        render(<Rate value={5}/>);
        expect(screen.queryAllByText(/star.svg/i)[0]).toBeInTheDocument();
    }); 

    it("render Rate with zero rating", () => {
        const { container } = render(<Rate value={0}/>);
        expect(container.getElementsByClassName("checked").length).toBe(0);
    }); 
});