import React from "react";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/works/Works";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import "../src/app.scss";

//Sass

const App = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
};

export default App;
