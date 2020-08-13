import React, { Component } from 'react';
import Logo from "../Logo/Logo";
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Logo />
            </div>
        );
    }
}

export default Footer;