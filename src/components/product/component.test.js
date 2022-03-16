import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { Product } from './component'


const product = {
    name : "Product",
    price : 12,
    ingredients : ["val1", "val2"]
}

it('expectation buttons test', () => {

    render(<Product increment={()=>{}} decrement={()=>{}} amount={0} product={product} />);

    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();

});

it('expectation price currency test', () => {

    render(<Product increment={()=>{}} decrement={()=>{}} amount={0} product={product} />);

    expect(screen.getByText(product.price + " $")).toBeInTheDocument();

});

it('increment decrement execution test', () => {


    const amount = 0;
    const decrement = jest.fn();
    const increment = jest.fn();

    render(<Product increment={increment} decrement={decrement} amount={amount} product={product} />);

    fireEvent(screen.getByText('-'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    fireEvent(screen.getByText('+'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    expect(decrement).toHaveBeenCalled();
    expect(increment).toHaveBeenCalled();
});

