import React from "react";
import { render } from "react-testing-library";
import Component from "./header";

describe("Header test suite", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
