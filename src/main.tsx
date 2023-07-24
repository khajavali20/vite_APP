import React from "react";
//import App from "./App";
//import NoteApp from "./NoteApp";
import ReactDom from "react-dom/client";
import "./index.css";
import Upload from "./Upload";



const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDom.createRoot(rootEl);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*<NoteApp />*/}
    <Upload /> 
    
  </React.StrictMode>
);
