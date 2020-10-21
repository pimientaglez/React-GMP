import React from 'react';
import MovieModal from "../Forms/MovieModal";
import "./MovieActionsMenu.scss";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

const MovieActionsMenu = (props) => {
    return (
        <React.Fragment>
            <div className="movie-actions-menu">
                <div className="close">x</div>
                <div className="edit" onClick={()=> props.showMovieModal(<MovieModal movie={props.movie} action={"edit"} />) }>Edit</div>            
                <div className="delete"  onClick={()=> props.showMovieModal(<MovieModal movie={props.movie} action={"delete"} />) }>Delete</div>
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
