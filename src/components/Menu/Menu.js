import React, { Component } from 'react';
import './Menu.scss'
import Categories from '../Categories/Categories';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Categories />
            </div>
        );
    }
}

export default Menu;