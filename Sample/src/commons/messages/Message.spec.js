import React from "react";
import { render } from "react-testing-library";
import Component from "./Message";

describe("Message test suite", () => {
  const message = "Une erreur est survenue"

  it("renders correctly", () => {
    const { asFragment } = render(<Component message={message} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
