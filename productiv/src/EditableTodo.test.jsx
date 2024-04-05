import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TODO = {
  id: '1',
  title: "title",
  description: "description",
  priority: 1
};

describe("Editable Todo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TODO} />);
  });

  it("matches snapshot before pressing edit", function () {
    const { asFragment } = render(<EditableTodo todo={TODO} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot after pressing edit", function () {
    const { asFragment, container } = render(<EditableTodo todo={TODO} />);

    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    expect(asFragment()).toMatchSnapshot();
  });

  it("changes components properly", function () {
    const mockUpdate = vi.fn();

    const { container } = render(<EditableTodo todo={TODO} update={mockUpdate} />);

    //edit button before changing components
    let editButton = container.querySelector(".EditableTodo-toggle");
    expect(container).toContain(editButton);

    fireEvent.click(editButton);

    expect(container).not.toContain(editButton);

    //form component submit button
    const submitButton = container.querySelector(".NewTodoForm-addBtn");
    expect(container).toContain(submitButton);

    fireEvent.click(submitButton);

    //edit button after changing components
    editButton = container.querySelector(".EditableTodo-toggle");
    expect(container).toContain(editButton);

    expect(container).not.toContain(submitButton);
  });
});