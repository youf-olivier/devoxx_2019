import React from "react";
import { render } from "react-testing-library";
import Component from "./user";

describe("User card test suite", () => {
  const user = {
    login: 123123,
    avatar_url: "http://avatar.jpg",
    html_url: "http://comptegithub.com"
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Component user={user} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
