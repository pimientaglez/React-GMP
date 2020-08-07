import React, { Component } from 'react';
import Menu from "../Menu/Menu";
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Menu />
            </div>
        );
    }
}

export default Main;