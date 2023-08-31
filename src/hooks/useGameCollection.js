import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem("obc-game-lib");
    if (!storageGames) return [];
    return JSON.parse(storageGames);
  });

  const addGame = ({ titleGame, coverGame }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, titleGame, coverGame };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return { games, addGame, removeGame };
}
