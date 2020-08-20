import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./index.scss";

if (process.env.NODE_ENV === "development") {
  console.log("DEV");
}
if (process.env.NODE_ENV === "production") {
  console.log("PROD");
}

ReactDOM.render(<App />, document.querySelector("#root"));
