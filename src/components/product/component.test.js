import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Product } from './component';

const data = {
    name: 'Chicken tikka masala',
    price: 12,
    ingredients: ['chicken', 'rice'],
}

describe("Product tests", () => {
    it('render Product', () => {
        render(<Product product={data}/>);

        expect(screen.getByText(data.name)).toBeInTheDocument();
        expect(screen.getByText('chicken, rice')).toBeInTheDocument();
    });

    it('test Product increment callback', () => {
        const incrementMock = jest.fn();

        render(<Product product={data} increment={incrementMock}/>);
        const buttonIncrement = screen.getByText("+");

        fireEvent(buttonIncrement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(incrementMock).toHaveBeenCalled();
    });
    
    it('test Product decrement callback', () => {
        const decrementMock = jest.fn();

        render(<Product product={data} decrement={decrementMock}/>);
        const buttonDecrement = screen.getByText("-");

        fireEvent(buttonDecrement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(decrementMock).toHaveBeenCalled();
    });
});