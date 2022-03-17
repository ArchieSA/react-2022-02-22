import { fireEvent, render, screen } from '@testing-library/react';
import { Product } from './component';

describe('product: basic props test', () => {
  const product = {
    name: 'Margarita',
    price: 20,
    ingredients: ['bread', 'cheese', 'tomatoes'],
  };
  const amount = 5;
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  const buttonClick = type => {
    fireEvent(
      screen.getByText(type),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  };
  const increaseAmount = () => buttonClick('+');
  const decreaseAmount = () => buttonClick('-');

  beforeEach(() => {
    render(
      <Product
        product={product}
        amount={amount}
        increment={mockIncrement}
        decrement={mockDecrement}
      />
    );
  });

  test('product name is displayed', () => {
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  test('product price is displayed', () => {
    expect(screen.getByText(`${product.price} $`)).toBeInTheDocument();
  });

  test('test if product not passed (check error type)', () => {
    expect(() => render(<Product />)).toThrow(TypeError);
  });

  test('amount is displayed', () => {
    expect(screen.getByText(amount)).toBeInTheDocument();
  });

  test('test if 2 buttons are displayed', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('test plus button label', () => {
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  test('test minus button label', () => {
    expect(screen.getByText('-')).toBeInTheDocument();
  });

  test('test plus button click', () => {
    increaseAmount();
    expect(mockIncrement).toHaveBeenCalled();
  });

  test('test minus button click', () => {
    decreaseAmount();
    expect(mockDecrement).toHaveBeenCalled();
  });

  test('test if increment is called on each plus-button click', () => {
    const buttonClicks = 7;
    [...Array(buttonClicks)].map(_ => increaseAmount());
    expect(mockIncrement).toHaveBeenCalledTimes(buttonClicks);
  });

  test('test if decrement is called on each minus button click', () => {
    const buttonClicks = 12;
    [...Array(buttonClicks)].map(_ => decreaseAmount());
    expect(mockDecrement).toHaveBeenCalledTimes(buttonClicks);
  });
});
