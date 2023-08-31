import styles from "./styles/App.module.css";
import NewGameForm from "./components/NewGameForm/NewGameForm";
import Game from "./components/Game/Game";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div id={styles.app}>
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame}></NewGameForm>
      <div className={styles.divGamesAdded}>
        <h1>Jogos Adicionados</h1>
        <div className={styles.divGames}>
          {games.map((game) => {
            return (
              <Game
                key={game.id}
                titleGame={game.titleGame}
                coverGame={game.coverGame}
                onRemove={() => removeGame(game.id)}
              ></Game>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
