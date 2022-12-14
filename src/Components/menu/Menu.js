import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setmenuOpen }) => {
    return (
        <div className={menuOpen ? "menu active" : "menu"}>
            <ul>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
