import React from "react";
import './app.scss';
import logo from '../assets/logo.svg';

const App = () => {
    return (
        <div className="content">
            <div className="title">
                <h1>Netflix Roulette App</h1>
                <h3>Created with React  <img src={logo} alt="React Logo" style={{width: '20px', height: '20px'}}/></h3>
            </div>
        </div>
    )
}

export default App;