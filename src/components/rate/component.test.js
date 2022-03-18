import { Rate } from "./component";
import React from 'react';
import { render, screen } from '@testing-library/react';

// {testData} stars checked, {5 - testData} stars unchecked
const testData = 2

test('checked stars', () => {
    render(
      <Rate value={testData} />
    );

    const starElements = screen.getAllByTestId('star')
    const checkedStarElements = starElements.filter(element => element.classList.contains('checked'))

    expect(checkedStarElements.length).toBe(testData)
 });

 test('unchecked stars', () => {
    render(
      <Rate value={testData} />
    );

    const starElements = screen.getAllByTestId('star')
    const uncheckedStarElements = starElements.filter(element => !element.classList.contains('checked'))

    expect(uncheckedStarElements.length).toBe(5 - testData)
 });

 test('renders five stars', () => {
    render(
      <Rate />
    );
    const items = screen.getAllByTestId('star')
    expect(items).toHaveLength(5)
 });
