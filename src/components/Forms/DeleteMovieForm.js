import React, { Component } from "react";

class EditMovieForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>DELETE MOVIE</h1>
                <form action="" className="form-delete">
                    <span>Are you sure you want to delete this movie?</span>
                    <div className="button-group right actions">
                        <button className="ui-button primary">CONFIRM</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default EditMovieForm;
