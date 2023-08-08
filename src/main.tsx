import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import YouTubeForm from "./components/YouTubeForm";

//import App from "./App";
//import NoteApp from "./NoteApp";
//import NoteRender from "./NoteRender";
//import Upload from "./Upload";

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDom.createRoot(rootEl);

root.render(
  <React.StrictMode>

    {/* <App /> */}
    {/*<NoteApp />*/}
    {/*<Upload /> */}
    {/*<NoteRender /> */}
    <YouTubeForm />
    
  </React.StrictMode>
);
