import logo from './logo.svg';
import './App.css';
import CharacterCard from './component/characterCard';
import ScoreBoard from './component/scoreBoard';
import characters from './component/characters.json';
import Banner from './component/banner';
import { useState, prevState } from "react";
import uniqid from "uniqid";


const App = () => {

  const [celebCardList, setCelebCardList]=useState([...characters]);
  const [currentScore, setCurrentScore]=useState(0);
  const [highestScore, setHighestScore]=useState(0);


  const shuffleList = (characters) => {
    let list = [...characters];
    let randomList = [];

    for(var i = 0; i < 8; i++) {  
      var randIndex = randomIndex(list.length);
      randomList.push(list[randIndex]);
      list.splice(randIndex,1);
    }

    return randomList;
  }


  const randomIndex = (max) => {
    return Math.floor((Math.random() * max)+0); 
  }

  const newRound = () => {
    for(var i = 0; i < celebCardList.length; i++) {
      celebCardList[i].key=uniqid();
    }
  }

  const newList = celebCardList.map((character) => {
  
    return (
      < CharacterCard 
        key={character.key}
        id={character.id}
        name={character.name}
        pic={character.pic}
        clicked={false}
        shuffle={
          (event) => {
          event.preventDefault();
          setCelebCardList(shuffleList(celebCardList));
        }}
        currentScore={(event) => {
          event.preventDefault();
          setCurrentScore(prevState => prevState + 1);
        }}
        highestScore={(event) => {
          event.preventDefault();
          if(currentScore > highestScore) {
            setHighestScore(currentScore);
          } else {
            setHighestScore(highestScore);
          }
          setCurrentScore(0);
          newRound();
        }}
    />
    )
  })

  return (
    <div className="App">
      < Banner 
          currentScore={currentScore}
          highestScore={highestScore}
      />
      <div id="card-list-container">
        <div id="cardList">
          {newList}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
import React, { useEffect, useState } from "react";
import EducationForm from "./educationForm";
import uniqid from "uniqid";

const Education = props => {




 import function from ./component/file
  import function from ./file
  */