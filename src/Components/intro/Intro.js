import React, { useEffect, useRef } from "react";
import "./intro.scss";

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Saman Gholami</h1>
                    <h3>
                        Front-End <span>Developer(React)</span>
                    </h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
