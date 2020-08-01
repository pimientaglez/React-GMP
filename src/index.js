import React from 'react';
import ReactDOM from "react-dom";

if (process.env.NODE_ENV === 'development') {
    console.log('DEV');
}
if (process.env.NODE_ENV === 'production') {
    console.log('PROD');
}
const App = ()=> <div>Hello world!</div>

ReactDOM.render(<App />, document.querySelector('#root'));