import React from "react";
import ScoreBoard from "./scoreBoard";

const Banner = (props) => {

    return (
        <div id="banner-container">
            <div id="banner-1">
            < ScoreBoard 
                    currentScore={props.currentScore}
                    highestScore={props.highestScore} 
                />
            </div>
            <div id="banner-2">
                <div id="memory-label-container">
                    <h3 id="memory-label">MEMORY GAME</h3>
                </div>
                <h4 id="points-label">Get points by clicking on an image but don't click on any more than once!</h4>
            </div>
        </div>
        
    )
}

export default Banner;