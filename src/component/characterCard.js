import React, {useState, useEffect } from "react";

const CharacterCard = props => {

    const [clicked, isClicked]=useState(props.clicked);

    return (
        <div key={props.key} className="card" onClick={(event) => {
            event.preventDefault();
            {props.shuffle(event)}
            if(clicked) {
                props.highestScore(event);
            } else {
                props.currentScore(event);
                 isClicked(true);
            }
          }}>
            <img className="charPic" src ={props.pic}></img>
            <h4 id="card-name">{props.name}</h4>
        </div>
    )
}

export default CharacterCard;