import React, { useState } from "react";
import "./portfolio.scss";
import Register from "../../../src/Photos/registerForm.png";
import Crypto from "../../../src/Photos/crypto.png";
import Shop from "../../../src/Photos/shop.png";
import TodoList from "../../Photos/todolist.png";

const Portfolio = () => {
    const [data, setData] = useState([
        { id: 1, image: Register, name: "Register Form", link: "https://admirable-strudel-ae2eac.netlify.app" },
        { id: 2, image: Crypto, name: "Crypto rate", link: "https://bejewelled-stroopwafel-8927b5.netlify.app" },
        { id: 3, image: Shop, name: "Shopping Cart", link: "https://cerulean-sprinkles-5f0fbb.netlify.app" },
        { id: 4, image: TodoList, name: "To do list", link: "https://codepen.io/samangh379/pen/OJvjpeW" },
    ]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>
                    <p>Projects : Live Demos</p>
                </li>
            </ul>

            <div className="container">
                {data.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.image} /> <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
