import React from "react";
import { render, fireEvent } from "react-testing-library";
import 'jest-dom/extend-expect';
import { MessageContext } from "./MessageContext";
import "react-testing-library/cleanup-after-each";
import MessageContainer from "./Message.container";

const getWrapper = (message, displayMessage) => ({ children }) => (
  <MessageContext.Provider value={{ message, displayMessage }}>
    {children}
  </MessageContext.Provider>
);

describe("Message Provider test suite", () => {
  it("should Message Provider show Message", () => {
    const { container } = render(<MessageContainer />, {
      wrapper: getWrapper("", () => {})
    });
    expect(container.querySelector(".error-message")).toBeNull();
  });

  it("should Message Provider show Message", () => {
    const { container } = render(<MessageContainer />, {
      wrapper: getWrapper("Une erreur est survenue", () => {})
    });
    expect(container.querySelector(".error-message")).not.toBeNull();
    expect(container.querySelector(".error-message")).toHaveTextContent('Une erreur est survenue');
  });

  it('should Hide Message if onClose is called', () => {
    const { container, getByText } = render(<MessageContainer />, {
        wrapper: getWrapper("Une erreur est survenue", () => {})
      });

      // We expect a message 
      expect(container.querySelector(".error-message")).not.toBeNull();
      expect(container.querySelector(".error-message")).toHaveTextContent('Une erreur est survenue');

      // We emulate a click event => Closing button
      fireEvent.click(container.querySelector(".error-message__close"));
    
      // We expect that the message disappear
      expect(container.querySelector(".error-message")).not.toBeNull();
    })
  
});
