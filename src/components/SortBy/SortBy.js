import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './SortBy.scss';

class SortBy extends Component {
    render() {
        return (
            <div className="sort-by">
                <div className="title">SORT BY</div>
                <button className="ui-button select select-sort">RELEASE DATE<FontAwesomeIcon icon={faCaretDown} /></button>
                
            </div>
        );
    }
}

export default SortBy;