import React, { useState } from "react";
import "./works.scss";
import ShopCart from "../../Photos/details.png";
import github from "../../Photos/github.png";
import CryptoPhoto from "../../Photos/CryptoPhoto.png";
import SignUp from "../../Photos/SignUp.png";

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            image: ShopCart,
            title: "Shop Cart",
            desc: "this Shopping cart deployed with real api from fakeStoreApi.com",
            link: "https://github.com/samangh379/Shopping-Cart",
        },

        {
            id: 2,
            image: CryptoPhoto,
            title: "Crypto Rate",
            desc: "This page also uses the real api to show the current digital currency rates",
            link: "https://github.com/samangh379/Crypto-page",
        },

        {
            id: 3,
            image: SignUp,
            title: "Register Form",
            desc: " On this page, all the information given must be in accordance with the signs and symbols, otherwise it will not allow registration",
            link: "https://github.com/samangh379/sign-up",
        },
    ];
    const checkHandler = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src="assets/globe.png" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc} </p>
                                    <a href={d.link}>
                                        <img className="git" src={github} />
                                        Source-Code
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.image} />
                            </div>
                        </div>
                    </div>
                ))}
                ;
            </div>
            <img src="assets/arrow.png" className="arrow left" onClick={() => checkHandler("left")} />
            <img src="assets/arrow.png" className="arrow right" onClick={() => checkHandler()} />
        </div>
    );
};

export default Works;
