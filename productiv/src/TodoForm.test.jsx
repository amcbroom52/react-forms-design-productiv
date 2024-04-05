import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

const TODO = {
  id: '1',
  title: "title",
  description: "description",
  priority: 1
};

describe("Todo Form Component", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("matches snapshot without data", function () {
    const {asFragment} = render(<TodoForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("submitting form works", function () {
    const {asFragment} = render(<TodoForm initialData={TODO} />);

    expect(asFragment()).toMatchSnapshot();
    const mockHandleSave = vi.fn();
    const {container, debug} = render(<TodoForm handleSave={mockHandleSave} />);

    const titleInput = container.querySelector("[name=title]");
    const descriptionInput = container.querySelector("[name=description]");
    const priorityInput = container.querySelector("[name=priority]");

    fireEvent.input(titleInput, {target: {value: "test"}});
    fireEvent.input(descriptionInput, {target: {value: "test description"}});
    fireEvent.input(priorityInput, {target: {value: "1"}});

    expect(container.querySelectorAll("input[value='test']")).toHaveLength(1);
    expect(container.querySelector("[name=description]")).toContainHTML("test description");
    expect(mockHandleSave).toHaveBeenCalledTimes(0);

    fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));

    expect(container.querySelectorAll("input[value='']")).toHaveLength(1);
    expect(container.querySelector("[name=description]")).not.toContainHTML("test description");
    expect(mockHandleSave).toHaveBeenCalledTimes(1);
  });



});