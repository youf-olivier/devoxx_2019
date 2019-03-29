import React, { createContext, useState } from "react";

export const MessageContext = createContext(null);

const MessageProvider = props => {
  const [message, displayMessage] = useState("");
  return (
    <MessageContext.Provider value={{ message, displayMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
