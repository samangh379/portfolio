import React from "react";
import { Person, Mail } from "@material-ui/icons";

import "./topbar.scss";

const Topbar = ({ menuOpen, setmenuOpen }) => {
    return (
        <div className={menuOpen ? "topbar active" : "topbar"} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Sami.
                    </a>
                    <div className="itemCounter">
                        <Person className="icon" />
                        <span>+98 921 552 3818</span>
                    </div>
                    <div className="itemCounter">
                        <Mail className="icon" />
                        <span>samangh379@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => {
                            setmenuOpen(!menuOpen);
                        }}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
