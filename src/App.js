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
        <p><b>by <a href='https://github.com/dydr31'>dydr31@gitgub.com</a></b></p>
        <p><a href="https://www.flaticon.com/free-stickers/animals" title="animals stickers">Animals stickers created by Stickers - Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
