import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import Todo from "./Todo";

const TODOS = [
    {
    id: '1',
    title: "title1",
    description: "description1",
    priority: 1
    },
    {
    id: '2',
    title: "title2",
    description: "description2",
    priority: 2
    },
    {
    id: '3',
    title: "title3",
    description: "description3",
    priority: 3
    }
];



describe("Todo component", function () {
    it("renders without crashing", function () {
        render(<TopTodo todos={TODOS} />);
    });

    it("matches snapshot", function () {
        const { asFragment } = render(<TopTodo todos={TODOS} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it("contains correct TopTodo values", function() {
        const {container} = render(<TopTodo todos={TODOS} />);
        const topTodo = render(<Todo todo={TODOS[0]} />);
        expect(container).toEqual(topTodo.container);
        expect(container).not.toContainHTML("description2");
    });
})