import React from 'react';
import { render, screen } from '@testing-library/react'
import { Review } from './component'

it('name view test', () => {
    const name = 'Test Name';
    const text = 'Some text';
    render(<Review user={name} text={text} rating={3} />);

    expect(screen.getByText(name)).toBeInTheDocument();
});

it('text view test', () => {
    const name = 'Test Name';
    const text = 'Some text';
    render(<Review user={name} text={text} rating={3} />);

    expect(screen.getByText(text)).toBeInTheDocument();
});


