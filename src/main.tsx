import React from "react";
import App from "./App";
import ReactDom from "react-dom/client";
import "./index.css";
import First from "./First";

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDom.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
    <First />
  </React.StrictMode>
);
