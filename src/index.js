import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.getElementsByClassName('root'))
root.render(<App/>)