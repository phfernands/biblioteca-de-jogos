import PropTypes from "prop-types";
import styles from "./styles.module.css";

Game.propTypes = {
  titleGame: PropTypes.string,
  coverGame: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function Game({ titleGame, coverGame, onRemove }) {
  return (
    <div className={styles.divGameCard}>
      <img className={styles.imgGame} src={coverGame} alt="" />
      <div>
        <h3>{titleGame}</h3>
        <button onClick={onRemove} className={styles.removeButton}>
          Remover Jogo
        </button>
      </div>
    </div>
  );
}
