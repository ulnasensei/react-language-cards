import React, { useState } from "react";
import "./CardFront.css";

const CardFront = ({ item }) => {
    const [hover, setHover] = useState(false);
    const imgStyle = {
        transform: hover ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.2s ease",
    };
    return (
        <>
            <img
                className="logo"
                style={imgStyle}
                src={item.img}
                alt=""
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            <h5 className="name">{item.name}</h5>
        </>
    );
};

export default CardFront;
