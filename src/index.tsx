import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import PokerContextProvider from "./components/store/poker-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PokerContextProvider>
    <App />
  </PokerContextProvider>
);
