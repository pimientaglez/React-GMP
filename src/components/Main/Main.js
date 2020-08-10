import React, { Component } from 'react';
import Menu from "../Menu/Menu";
import './Main.scss';
import ResultCount from '../ResultCount/ResultCount';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Menu />
                <ResultCount />
            </div>
        );
    }
}

export default Main;