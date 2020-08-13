import React, { Component } from 'react';
import './Menu.scss'
import Categories from '../Categories/Categories';
import SortBy from "../SortBy/SortBy";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Categories />
                <SortBy />
            </div>
        );
    }
}

export default Menu;