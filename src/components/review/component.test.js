import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Review } from './component';
import { Rate } from '../rate/component'

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

    test("rating from props should be render", () => {
        const testRenderer = TestRenderer.create(<Review user={"Alex"} text={"Nice!"} rating={5} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(Rate).props.value).toBe(5);
    });
});