import React from 'react';
//import { create } from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Review } from './component';

describe("Review component", () => {
    test("user from props should be render", () => {
        const user = "Alex";
        render(<Review user={user} />);
        expect(screen.getByText("Alex")).toBeInTheDocument();
    });
});

/*it('our first test', () => {
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
});*/