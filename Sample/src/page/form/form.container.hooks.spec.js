import React from "react";
import {
  render,
  waitForDomChange,
  fireEvent
} from "react-testing-library";
import "react-hooks-testing-library/cleanup-after-each";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import FormContainer from "./form.container.hooks";
import { MessageContext } from "commons/messages";

const getWrapper = (message, displayMessage) => ({ children }) => (
  <MessageContext.Provider value={{ message, displayMessage }}>
    {children}
  </MessageContext.Provider>
);

const listUsers = [
  {
    id: "01",
    html_url: "http://urluser1",
    avatar_url: "http://urlimageuser1",
    login: "johnpapa"
  },
  {
    id: "02",
    html_url: "http://urluser2",
    avatar_url: "http://urlimageuser2",
    login: "gaearon"
  },
  {
    id: "03",
    html_url: "http://urluser3",
    avatar_url: "http://urlimageuser3",
    login: "kentcdodds"
  }
];

const singleUser = [
  {
    id: "42",
    html_url: "http://urluser42",
    avatar_url: "http://urlimageuser42",
    login: "oyouf"
  }
];

// About Warning : https://github.com/facebook/react/pull/14853
describe("Form container tests suite", () => {
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    mock
      .onGet(
        "https://api.github.com/search/users?q=followers:%3E40000&order=desc&sort=followers"
      )
      .reply(200, { items: listUsers });
    mock
      .onGet("https://api.github.com/search/users?q=user:oyouf")
      .reply(200, { items: singleUser });
  });

  it("should return correct render before request return", () => {
    let rendering;
    rendering = render(<FormContainer />, {
      wrapper: getWrapper("", () => {})
    });

    const { asFragment } = rendering;
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show All User on load", async () => {
    let rendering;

    rendering = render(<FormContainer />, {
      wrapper: getWrapper("", () => {})
    });

    const { container, asFragment } = rendering;
    await waitForDomChange({ container });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a single user when search him in the form", async () => {
    let rendering;

    rendering = render(<FormContainer />, {
      wrapper: getWrapper("", () => {})
    });

    //First Load
    const { container, getByText, getAllByTestId, getByLabelText } = rendering;
    await waitForDomChange({ container });
    const firstPass = getAllByTestId("usercard");

    expect(firstPass.length).toBe(3); //or not to be

    // Search oyouf
    const input = getByLabelText(/Compte Github/i);
    const button = getByText(/rechercher/i);
    fireEvent.change(input, { target: { value: "oyouf" } });
    fireEvent.click(button);

    // Result Expected
    await waitForDomChange({ container });
    const secondPass = getAllByTestId("usercard");
    expect(secondPass.length).toBe(1);
  });

  it("should show message when input empty", async () => {
    let rendering;

    rendering = render(<FormContainer />, {
      wrapper: getWrapper("", () => {})
    });

    //First Load
    const { container, getByText, getAllByTestId } = rendering;

    // Search empty
    const button = getByText(/rechercher/i);
    fireEvent.click(button);

    // Result Expected
    await waitForDomChange({ container });
    const secondPass = getAllByTestId("usercard");
    expect(secondPass.length).toBe(3);
    expect(container.querySelector(".form__error-message")).not.toBeNull();
  });
});
