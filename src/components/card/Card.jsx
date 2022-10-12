import React, { useState } from "react";
import CardBack from "../cardBack/CardBack";
import CardFront from "../cardFront/CardFront";
import "./Card.css";

const Card = ({ item }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="card" onClick={() => setClicked((prev) => !prev)}>
            {selectSide(clicked, item)}
        </div>
    );
};

const selectSide = (clicked, item) => {
    if (clicked) {
        return <CardBack item={item} />;
    } else {
        return <CardFront item={item} />;
    }
};

export default Card;
