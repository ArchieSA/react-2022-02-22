import { Review } from "./component";
import React from 'react';
import { render, screen } from '@testing-library/react';

const propData = {
    user: 'Diana',
    text: 'Not bad',
    rating: 5
 };

test('user name in Review', () => {
    render(
      <Review {...propData} />
    );
    expect(screen.getByText(propData.user)).toBeInTheDocument();
 });
 
 test('user review in Review', () => {
    render(
      <Review {...propData} />
    );
    expect(screen.getByText(propData.text)).toBeInTheDocument();
 });

 test('Review contains Rate', () => {
    render(
      <Review {...propData} />
    );
    const review = screen.getByTestId('review')
    const rate = screen.getByTestId('rate')
    expect(review).toContainElement(rate)
 });

 test('Rate renders in Review', () => {
    render(
      <Review {...propData} />
    );
    const rate = screen.getByTestId('rate')
    expect(rate).toBeInTheDocument();
 });

