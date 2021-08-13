import React from "react";

/** A single card.
 * 
 * Props: 
 * - img
 * - id
 */

function Card({ img, id }) {
    return (
        <img className="Card" src={img} alt={id}/>
    );
}

export default Card;