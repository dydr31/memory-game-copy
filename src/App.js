import logo from "./logo.svg";
import classes from "./App.module.css";
import GameTable from "./components/GameTable";

function App() {
  return (
    <div className={classes.background}>
      <header>
        <h1>Memory Game</h1>
      </header>
      <GameTable />
      <footer>
        <p>by dydr31@gitgub.com</p>
      </footer>
    </div>
  );
}

export default App;
