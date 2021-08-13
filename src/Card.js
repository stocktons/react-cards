import React from "react";

/** A single card.
 * 
 * Props: 
 * - img
 */

function Card({ img, id }) {
    return (
        <img className="Card" src={img} alt={id}></img>
    );
}

export default Card;