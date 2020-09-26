import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from "./components/app";
import reducers from './reducers'
import thunk from 'redux-thunk';

import "./index.scss";

if (process.env.NODE_ENV === "development") {
  console.log("DEV");
}
if (process.env.NODE_ENV === "production") {
  console.log("PROD");
}
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#root"));
