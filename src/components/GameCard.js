import classes from './GameCard.module.css'

const GameCard = props => {

    const gameCardClickHandle = event => {
        props.onClickId(event.target.id)
    }

    return <div className={classes['game-card']}>
        <img src={props.img} id={props.id} onClick={gameCardClickHandle}/>
    </div>
}

export default GameCard