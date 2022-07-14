import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import AppUser from "./AppUser";
import AppDoctor from "./AppDoctor";

ReactDOM.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    <AppUser />
    <AppDoctor />
    {/* </React.StrictMode>, */}
  </>,
  document.getElementById("root")
);
