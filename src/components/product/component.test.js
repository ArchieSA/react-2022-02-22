import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Product } from './component';

const product = {
    id: '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
    name: 'Flat Iron Burger',
    price: 10,
    ingredients: ['bread', 'beef']
}

describe("Product component", () => {
    test("Name of product should be render", () => {
        render(<Product product={product} />);
        expect(screen.getByText("Flat Iron Burger")).toBeInTheDocument();
    });

    test("Price of product should be render", () => {
        render(<Product product={product} />);
        expect(screen.getByText("10 $")).toBeInTheDocument();
    });

    test("Ingredients of product should be render", () => {
        render(<Product product={product} />);
        expect(screen.getByText("bread, beef")).toBeInTheDocument();
    });

    test("Amount should be render", () => {
        render(<Product product={product} amount={0} />);
        expect(screen.getByText(0)).toBeInTheDocument();
    });

    test('Decrement should be called', () => {
        const mockDecrement = jest.fn();
    
        render(<Product product={product} amount={0} decrement={mockDecrement} />);
    
        fireEvent(screen.getByText('-'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    
        expect(mockDecrement).toHaveBeenCalled();
    });

    test('Increment should be called', () => {
        const mockIncrement = jest.fn();
    
        render(<Product product={product} amount={0} increment={mockIncrement} />);
    
        fireEvent(screen.getByText('+'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    
        expect(mockIncrement).toHaveBeenCalled();
    });
});