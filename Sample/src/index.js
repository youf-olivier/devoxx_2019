import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import Header from "./layout/header";
import Form from "./page/form";
import Message, { MessageProvider } from "commons/messages";

function App() {
  return (
    <MessageProvider>
      <Header />
      <div className="App App-container">
        <Message />
        <Form />
      </div>
    </MessageProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
