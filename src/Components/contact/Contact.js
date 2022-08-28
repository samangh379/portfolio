import React, { useState } from "react";
import "./contact.scss";
import { Person, Mail } from "@material-ui/icons";

const Contact = () => {
    const [state, setState] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setState(true);
    };

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
                    <button type="submit">Send</button>

                    {state && <span className="response">Thanks,I'll reply as soon as possible ;) </span>}
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
        </div>
    );
};

export default Contact;
