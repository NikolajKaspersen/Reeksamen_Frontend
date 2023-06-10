import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App";
import apiFacade from "./apiFacade";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App apiFacade={apiFacade} />

  </React.StrictMode>
);