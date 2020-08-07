import React, { Component } from 'react';
import TopContainer from "../TopContainer/TopContainer";
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <TopContainer />
            </div>
        );
    }
}

export default Header;