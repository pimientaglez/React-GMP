import React, { Component } from "react";
import "./ErrorPage.scss";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <h1>
                    Page Not Found
                </h1>
                <img src="https://www.flaticon.es/svg/static/icons/svg/1510/1510317.svg" alt="404"/>
                {/* <img src="https://www.flaticon.es/svg/static/icons/svg/3190/3190559.svg" alt="404"/> */}
                <button className="ui-button overline reset"  >GO BACK TO HOME</button>
            </div>
        );
    }
}

export default ErrorPage;

