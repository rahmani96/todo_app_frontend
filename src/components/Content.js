import React from "react";
import Body from "../layouts/Body.js";
import Footer from '../layouts/Footer.js';
import Header from "../layouts/Header.js";

function Content(){
    return (
        <div className="App-header">
            <Header />
            <Body /> 
            <Footer />
        </div>
    )
}

export default Content