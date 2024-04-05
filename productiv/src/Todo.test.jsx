import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TODO = {
    id: '1',
    title: "title",
    description: "description",
    priority: 1
};

describe("Todo component", function () {
    it("renders without crashing", function () {
        render(<Todo todo={TODO} />);
    });

    it("matches snapshot", function () {
        const { asFragment } = render(<Todo todo={TODO} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it("contains Todo values", function() {
        const { container } = render(<Todo todo={TODO} />);
        expect(container).toContainHTML("description");
        expect(container).toContainHTML("title");
        expect(container).toContainHTML("Priority: 1");
    })
});
