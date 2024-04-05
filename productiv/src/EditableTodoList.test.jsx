import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import EditableTodo from "./EditableTodo";


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

describe("EditableTodoList component", function () {
    it("renders without crashing", function () {
        render(<EditableTodoList todos={TODOS} />);
    });

    it("matches snapshot", function () {
        const { asFragment } = render(<EditableTodoList todos={TODOS} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it("contains correct Todo values", function() {
        const {container} = render(<EditableTodoList todos={TODOS} />);
        expect(container).toContainHTML("description1");
        expect(container).toContainHTML("description2");
        expect(container).toContainHTML("description3");
    });

    it("contains correct Todo values", function() {
        const {container} = render(<EditableTodoList todos={TODOS} />);
        let editButtons = container.querySelectorAll(".EditableTodo-toggle")
        expect(editButtons.length).toEqual(3);

        fireEvent.click(editButtons[0]);
        editButtons = container.querySelectorAll(".EditableTodo-toggle")
        expect(editButtons.length).toEqual(2);
    });
})
