import React, { useState } from "react";
import "./portfolio.scss";
import Register from "../../../src/Photos/registerForm.png";
import Crypto from "../../../src/Photos/crypto.png";
import Shop from "../../../src/Photos/shop.png";
import TodoList from "../../Photos/todolist.png";

const Portfolio = () => {
    const [data, setData] = useState([
        { image: Register, name: "Register Form", link: "https://admirable-strudel-ae2eac.netlify.app" },
        { image: Crypto, name: "Crypto rate", link: "https://bejewelled-stroopwafel-8927b5.netlify.app" },
        { image: Shop, name: "Shopping Cart", link: "https://cerulean-sprinkles-5f0fbb.netlify.app" },
        { image: TodoList, name: "To do list", link: "https://codepen.io/samangh379/pen/OJvjpeW" },
    ]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>
                    <it>Projects</it>
                </li>
            </ul>

            <div className="container">
                {data.map((item) => (
                    <div className="item">
                        <img src={item.image} /> <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
            {/* <div className="item">
                <img src={Register} />
                <h3>Banking App</h3>
            </div>
            <div className="item">
                <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" />
                <h3>Banking App</h3>
            </div>
            <div className="item">
                <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" />
                <h3>Banking App</h3>
            </div>
            <div className="item">
                <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" />
                <h3>Banking App</h3>
            </div>
            <div className="item">
                <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" />
                <h3>Banking App</h3>
            </div>
            <div className="item">
                <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" />
                <h3>Banking App</h3>
            </div> */}
        </div>
    );
};

export default Portfolio;
