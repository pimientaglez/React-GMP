import React from 'react';
import Movie from "../Forms/Movie";
import "./MovieActionsMenu.scss";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

const MovieActionsMenu = (props) => {
    return (
        <React.Fragment>
            <div className="movie-actions-menu">
                <div className="close">x</div>
                <div className="edit" onClick={()=> props.showMovieModal(<Movie movie={props.movie} action={"edit"} />) }>Edit</div>            
                <div className="delete"  onClick={()=> props.showMovieModal(<Movie movie={props.movie} action={"delete"} />) }>Delete</div>
            </div>
            {
                props.movieModal
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return { 
        movieModal: state.movieModal
    }  
}

export default connect(mapStateToProps, { showMovieModal })(MovieActionsMenu);
