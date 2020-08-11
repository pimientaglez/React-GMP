import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import './app.scss';

const App = () => {
    return (
        <div className="gmp">
            <ErrorBoundary>
                <Header />
                <Main />
                <Footer />
            </ErrorBoundary>
        </div>
    )
}

export default App;