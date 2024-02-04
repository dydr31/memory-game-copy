import logo from './logo.svg';
import classes from './App.module.css';
import GameTable from './components/GameTable';

function App() {
  return (
    <div className={classes.background}>
      <header><h1>Memory Game</h1></header>
      <GameTable/>
      <footer>copyright by copyright</footer>
    </div>
  );
}

export default App;
