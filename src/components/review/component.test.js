import { render, screen } from '@testing-library/react';
import { Review } from './component';

describe('review component: basic props test', () => {
  const user = 'Sam';
  const rating = 4;
  const text = 'Amazing!';

  beforeEach(() => {
    render(<Review user={user} rating={rating} text={text} />);
  });

  test('test if username is displayed', () => {
    expect(screen.getByText(user)).toBeInTheDocument();
  });

  test('test if review text is displayed', () => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('test if 5 stars are displayed', () => {
    expect(screen.getAllByText('star.svg')).toHaveLength(5);
  });
});

describe('review component: rating test', () => {
  test('test if rating is displayed correctly (first stars are checked, last stars are not checked)', () => {
    const rating = 3;
    const expectedClassName = 'checked';
    render(<Review rating={rating} user="username" text="some text here" />);
    screen.getAllByText('star.svg').forEach((star, i) => {
      i <= rating - 1
        ? expect(star).toHaveClass(expectedClassName)
        : expect(star).not.toHaveClass(expectedClassName);
    });
  });

  test('test negative star rating (all stars are not checked)', () => {
    render(<Review rating={-10} user="username" text="text" />);
    screen
      .getAllByText('star.svg')
      .forEach(star => expect(star).not.toHaveClass('checked'));
  });

  test('test 0 star rating (all stars are not checked)', () => {
    render(<Review rating={0} user="username" text="text" />);
    screen
      .getAllByText('star.svg')
      .forEach(star => expect(star).not.toHaveClass('checked'));
  });

  test('test 1000 star rating (all stars are checked)', () => {
    render(<Review rating={1000} user="username" text="text" />);
    screen
      .getAllByText('star.svg')
      .forEach(star => expect(star).toHaveClass('checked'));
  });

  test('test invalid rating type (all stars are not checked)', () => {
    render(<Review rating={[]} user="username" text="text" />);
    const stars = screen.getAllByText('star.svg');
    expect(stars).toHaveLength(5);
    stars.forEach(star => expect(star).not.toHaveClass('checked'));
  });

  test('test rating not passed', () => {
    render(<Review user="username" text="text" />);
    const stars = screen.getAllByText('star.svg');
    expect(stars).toHaveLength(5);
    stars.forEach(star => expect(star).not.toHaveClass('checked'));
  });
});

describe('review component: user', () => {
  test('user not passed', () => {
    render(<Review />);
    expect(screen.getByRole('heading')).toBeEmptyDOMElement();
  });
});
