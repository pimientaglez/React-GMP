import React from 'react';
import './Categories.scss';

function Categories(props) {
    return (
        <div className="categories">
            <ul>
                <li><a>ALL</a></li>
                <li><a>DOCUMENTARY</a></li>
                <li><a>COMEDY</a></li>
                <li><a>HORROR</a></li>
                <li><a>CRIME</a></li>
            </ul>
        </div>
    );
}

export default Categories;