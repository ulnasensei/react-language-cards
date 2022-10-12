import React from "react";
import "./CardBack.css";

const CardBack = ({ item }) => {
    return (
        <>
            <ul>
                {item.options.map((li) => {
                    return <li key={li}>{li}</li>;
                })}
            </ul>
        </>
    );
};

export default CardBack;
