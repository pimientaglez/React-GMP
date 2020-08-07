import React from "react";
import './app.scss';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const App = () => {
    return (
        <div className="gmp">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;