import React from "react";
import "./testimonials.scss";
import Aria from "../../Photos/aria.jpeg";

const Testimonials = () => {
    const data = [
        {
            id: 1,
            name: "Kate Wilson",
            title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
        },
        {
            id: 2,
            name: "Aria Noveiri",
            title: "Ui/UX Designer",
            img: Aria,
            icon: "assets/twitter.png",
            desc: "Saman is my friend for longtime, he has been learned programming from a year ago, he is hardWork person that you can rely on!",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" />
                            <img src={d.img} className="user" />
                            <img src={d.icon} className="right" />
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
