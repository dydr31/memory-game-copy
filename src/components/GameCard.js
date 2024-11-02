import classes from "./GameCard.module.css";

const GameCard = (props) => {
  const gameCardClickHandle = (event) => {
    props.onClickId(event.target.id);
  };

  return (
    <div className={classes["game-card"]} onClick={gameCardClickHandle}>
      <div className={classes['image-container']}>
        <img src={props.img} id={props.id} alt={props.alt}/>{" "}
      </div>
    </div>
  );
};

export default GameCard;
