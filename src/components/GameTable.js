import cow from "../assets/cow.png";
import crocodile from "../assets/crocodile.png";
import flamingo from "../assets/flamingo.png";
import sheep from "../assets/sheep.png";
import zebra from "../assets/zebra.png";

import { useState, useRef, useEffect } from "react";
import GameCard from "./GameCard";
import classes from "./GameTable.module.css";

let cardData = [
  { img: cow, id: 1, alt: "Cow" },
  { img: crocodile, id: 2, alt: "Crocodile" },
  { img: flamingo, id: 3, alt: "Flamingo" },
  { img: sheep, id: 4, alt: "Sheep" },
  { img: zebra, id: 5, alt: "Zebra" },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const GameTable = () => {
  //return shaffled cardData
  shuffleArray(cardData);

  const [n, setN] = useState(-1);
  // let n = useRef(-1)

  const [score, setScore] = useState(0);

  const firstRendering = useRef(true);

  const [final, setFinal] = useState(false);

  const onClickIdHandle = (id) => {
    //if out n changes game stops
    setN(chosenCards.indexOf(id));
    setScore((score) => score + 1);

    setChosenCards((chosenCards) => {
      return [id, ...chosenCards];
    });
  };

  useEffect(() => {
    if (score === 5) {
      setFinal(true);
    }
  }, [score]);

  useEffect(() => {
    if (firstRendering.current === true) {
      firstRendering.current = false;
      return;
    } else if (score === 5) {
      alert("game win");
      setScore(0);
      firstRendering.current = true;
      setChosenCards([""]);
      setFinal(false);
    } else {
      alert("game over!");
      setScore(0);
      firstRendering.current = true;
      setChosenCards([""]);
      setFinal(false);
    }
  }, [n, final]);

  const [chosenCards, setChosenCards] = useState("");

  let cards = cardData.map((x) => (
    <GameCard
      key={x.id}
      img={x.img}
      id={x.id}
      onClickId={onClickIdHandle}
      alt={x.alt}
      score={score}
    />
  ));

  return (
    <>{console.log(score)}
      <main className={classes["main-content"]}>
        <h2>Score: {score}</h2>
        <div className={classes["game-table"]}>{cards}</div>
      </main>
    </>
  );
};

export default GameTable;
