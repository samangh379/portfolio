import React, { useState } from "react";
import "./contact.scss";
import { Person, Mail } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    const notify = () => toast("I will replay as soon as possible ;) !");
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" onClick={notify}>
                        Send
                    </button>
                </form>
                <div className="info">
                    <div className="itemCounter">
                        <Person className="icon" />
                        <span>+98 921 552 3818</span>
                    </div>
                    <div className="itemCounter">
                        <Mail className="icon" />
                        <span>samangh379@gmail.com</span>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Contact;
