import ball from "../assets/ball.png";
import cone from "../assets/cone.png";
import cube from "../assets/cube.png";
import diamond from "../assets/diamond.png";
import pyramid from "../assets/pyramid.png";

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import GameCard from "./GameCard";
import classes from "./GameTable.module.css";
import { fireEvent } from "@testing-library/react";

let cardData = [
  { img: ball, id: 1 },
  { img: cone, id: 2 },
  { img: cube, id: 3 },
  { img: diamond, id: 4 },
  { img: pyramid, id: 5 },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const GameTable = (props) => {
  //return shaffled cardData
  shuffleArray(cardData);

  const [someData, setSomeData] = useState(1);
  const [n, setN] = useState(-1);
  // let n = useRef(-1)
  const [isGameOver, setIsGameOver] = useState(false);

  const firstRendering = useRef(true);
  

  const onClickIdHandle = (id) => {
    //this reloads our cards
    //setSomeData(Math.random());

    setN(chosenCards.indexOf(id));
    // n = chosenCards.indexOf(id)
    setScore((score) => score + 1);

    setChosenCards((chosenCards) => {
      return [id, ...chosenCards];
    });
  };

  const [score, setScore] = useState(0);

  useLayoutEffect(() => {
    if (firstRendering.current === true) {
      firstRendering.current = false;
      return;
    } else if (score === 5) {
      alert("game win");
      setIsGameOver(true);
      setScore(0);
      firstRendering.current = true;
      setChosenCards([""]);
    } else{
      alert("game over!");
      setIsGameOver(true);
      setScore(0);
      firstRendering.current = true;
      setChosenCards([""]);
    }
  }, [n]);

  // useEffect(() => {
  //   if (isGameOver === true) {
  //     console.log("over");
  //   }
  // });

  const [chosenCards, setChosenCards] = useState('');

  let cards = cardData.map((x) => (
    <GameCard key={x.id} img={x.img} id={x.id} onClickId={onClickIdHandle} />
  ));

  return (
    <div className={classes['main-content']}>
      <h2>Score: {score}</h2>
      <div className={classes["game-table"]}>
        {cards}
        {/* {console.log(chosenCards)}
        {console.log(score)} */}
      </div>
    </div>
  );
};

export default GameTable;
