import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", function () {
    it("renders without crashing", function () {
        render(<Footer />);
    });

    it("matches snapshot", function () {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    })

    it("contains Todo values", function() {
        const { container } = render(<Footer />);
        expect(container).toContainHTML("Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc.");
    })
});