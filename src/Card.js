import React from "react";

/** A single card.
 * 
 * Props: 
 * - img
 */

function Card(props) {
    return (
        <img className="Card" src={ props.img } alt="card"></img>
    );
}

export default Card;