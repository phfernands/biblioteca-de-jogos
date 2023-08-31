import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [titleGame, setTitleGame] = useState("");
  const [coverGame, setCoverGame] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame({ titleGame, coverGame });
    setTitleGame("");
    setCoverGame("");
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} id={styles.gamesForm} action="">
        <div className={styles.divForm}>
          <TextInput
            label="Nome do Jogo:"
            id="titleGame"
            value={titleGame}
            setValue={setTitleGame}
          ></TextInput>
        </div>
        <div className={styles.divForm}>
          <TextInput
            label="Capa do Jogo:"
            id="coverGame"
            value={coverGame}
            setValue={setCoverGame}
          ></TextInput>
        </div>
        <button type="submit">Adicionar Jogo!</button>
      </form>
    </>
  );
}
