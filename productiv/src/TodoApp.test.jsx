import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./TodoApp";


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

describe("TodoApp component", function () {
    it("renders without crashing", function () {
        render(<TodoApp initialTodos={TODOS} />);
    });

    it("matches snapshot", function () {
        const { asFragment } = render(<TodoApp initialTodos={TODOS} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it("contains correct Todo values", function() {
        const {container} = render(<TodoApp initialTodos={TODOS} />);
        expect(container).toContainHTML("description1");
        expect(container).toContainHTML("description2");
        expect(container).toContainHTML("description3");
    });

    it("no Todos contains correct page elements", function() {
        const {container} = render(<TodoApp />);
        expect(container).toContainHTML("You have no todos.");
        expect(container).not.toContainHTML("Top Todo");
        expect(container).toContainHTML("Add Nü");

        const forms = container.querySelectorAll("form");
        expect(forms.length).toEqual(1);
    });

    it("with Todos contains correct page elements", function() {
        const {container} = render(<TodoApp initialTodos={TODOS}/>);
        expect(container).toContainHTML("description1");
        expect(container).toContainHTML("description2");
        expect(container).toContainHTML("description3");
        expect(container).toContainHTML("Top Todo");
        expect(container).toContainHTML("Add Nü");

        const forms = container.querySelectorAll("form");
        expect(forms.length).toEqual(1);
    });

    it("submitting new Todo form works", function () {
        const {container} = render(<TodoApp />);

        expect(container).not.toContainHTML("test new description");

        const titleInput = container.querySelector("[name=title]");
        const descriptionInput = container.querySelector("[name=description]");
        const priorityInput = container.querySelector("[name=priority]");

        fireEvent.input(titleInput, {target: {value: "test new"}});
        fireEvent.input(descriptionInput, {target: {value: "test new description"}});
        fireEvent.input(priorityInput, {target: {value: "1"}});

        fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));

        expect(container).toContainHTML("test new description");
      });

      it("removing a Todo works", function () {
        const {container} = render(<TodoApp initialTodos={TODOS}/>);

        expect(container).toContainHTML("description1");

        const Todo1DeleteBtn = container.querySelector(".EditableTodo-delBtn");
        fireEvent.click(Todo1DeleteBtn);

        expect(container).not.toContainHTML("description1");
      });

      it("editing a Todo works", function () {
        const {container} = render(<TodoApp initialTodos={TODOS}/>);

        expect(container).toContainHTML("title1");
        expect(container).toContainHTML("description1");

        fireEvent.click(container.querySelector(".EditableTodo-toggle"));

        const titleInput = container.querySelector("[name=title]");
        const descriptionInput = container.querySelector("[name=description]");
        const priorityInput = container.querySelector("[name=priority]");

        fireEvent.input(titleInput, {target: {value: "edited t1"}});
        fireEvent.input(descriptionInput, {target: {value: "edited d1"}});
        fireEvent.input(priorityInput, {target: {value: "2"}});

        fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));

        expect(container).toContainHTML("edited t1");
        expect(container).toContainHTML("edited d1");
        expect(container).not.toContainHTML("title1");
        expect(container).not.toContainHTML("description1");
      });
})