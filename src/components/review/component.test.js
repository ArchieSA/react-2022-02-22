import React from 'react';
import { render, screen } from '@testing-library/react';
import { Review } from './component';

describe("Review component", () => {
    test("user from props should be render", () => {
        const user = "Alex";
        render(<Review user={user} />);
        expect(screen.getByText("Alex")).toBeInTheDocument();
    });

    test("text from props should be render", () => {
        const text = "Nice!";
        render(<Review text={text} />);
        expect(screen.getByText("Nice!")).toBeInTheDocument();
    });

    test("All five stars should be render always", () => {
        render(<Review user={"Alex"} text={"Nice!"} rating={4} />);
        expect(screen.getAllByText('star.svg')).toHaveLength(5);
    });

    test('If rating is correct then first stars are checked, last stars are not checked', () => {
        const rating = 2;
        render(<Review user={"Alex"} text={"Nice!"} rating={rating} />);
        screen.getAllByText('star.svg').forEach((star, index) => {
            index <= rating - 1
                ? expect(star).toHaveClass('checked')
                : expect(star).not.toHaveClass('checked');
        });
      });

    test('If rating is empty then all stars are not checked', () => {
        const rating = [];
        render(<Review user={"Alex"} text={"Nice!"} rating={rating} />);
        const stars = screen.getAllByText('star.svg');
        stars.forEach(star => expect(star).not.toHaveClass('checked'));
      });

    test('If rating > 5 then all stars are checked', () => {
        const rating = 6;
        render(<Review user={"Alex"} text={"Nice!"} rating={rating} />);
        const stars = screen.getAllByText('star.svg');
        stars.forEach(star => expect(star).toHaveClass('checked'));
    });

    test('If rating is 0 then all stars are not checked', () => {
        const rating = 0;
        render(<Review user={"Alex"} text={"Nice!"} rating={rating} />);
        const stars = screen.getAllByText('star.svg');
        stars.forEach(star => expect(star).not.toHaveClass('checked'));
    });

    test('If rating < 0 then all stars are not checked', () => {
        const rating = -1;
        render(<Review user={"Alex"} text={"Nice!"} rating={rating} />);
        const stars = screen.getAllByText('star.svg');
        stars.forEach(star => expect(star).not.toHaveClass('checked'));
    });
});