import React from 'react';
import { render, screen } from '@testing-library/react'
import { Review } from './component'

const data = {
    user: "test1",
    text: "test-text",
    rating: 5,
}

describe("Review tests", () => {
    it("render Review", () => {
        render(<Review {...data}/>);
        const userNameElement = screen.getByText(data.user);
        expect(userNameElement).toBeInTheDocument();
    });
});
