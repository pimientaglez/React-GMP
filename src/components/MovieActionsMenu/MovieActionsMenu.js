import React from 'react';
import "./MovieActionsMenu.scss";

const MovieActionsMenu = (props) => {
    return (
        <React.Fragment>
            <div className="movie-actions-menu">
                <div className="close">x</div>
                <div className="edit" onClick={()=> props.handleClick('edit')}>Edit</div>            
                <div className="delete"  onClick={()=> props.handleClick('delete')}>Delete</div>
            </div>
        </React.Fragment>
    );
}

export default MovieActionsMenu;