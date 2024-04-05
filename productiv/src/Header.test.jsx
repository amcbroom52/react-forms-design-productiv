import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", function () {
  it("renders without crashing", function () {
    render(<Header />);
  });

  it("matches snapshot without quote", function () {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with quote", function () {
    const { asFragment } = render(
      <Header quote={{ text: "randomness", author: "Adrian McBroom" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains Quote Text", function () {
    const { container } = render(
      <Header quote={{ text: "randomness", author: "Adrian McBroom" }} />
    );

    expect(container).toContainHTML("randomness -Adrian McBroom");
  });
});

