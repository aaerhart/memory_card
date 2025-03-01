import React, { useState } from "react";

const ScoreBoard = (props) => {

    return (
        <div id="scoreboard">
             <img id="spotlight-img" src="https://i.imgur.com/sXyua0v.png"></img>
            <div className="number-container">
                <h3>{props.currentScore}</h3>
            </div>
            <div className="number-container">
                <h3>{"-"}</h3>
            </div>
           <div className="number-container">
                <h3>{props.highestScore}</h3>
           </div>
        </div>
    )
}

export default ScoreBoard;