import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { Product } from './component'

it('our first test', () => {
    render(<Product effect={() => { }} />);

    expect(screen.getByText('Test ME')).toBeInTheDocument();
});

it('our second test', () => {
    const mockEffect = jest.fn();

    render(<Header effect={mockEffect} />);

    expect(mockEffect).toHaveBeenCalledTimes(1);
});

it('our third test', () => {
    const mockCallback = jest.fn();
    const mockEffect = jest.fn();

    render(<Header effect={mockEffect} callback={mockCallback} />);

    fireEvent(screen.getByText('click me'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    expect(mockCallback).toHaveBeenCalled();
});