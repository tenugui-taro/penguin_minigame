import styles from "./ScoreBar.module.css";
import { useAppSelector } from "@/stores/useAppSelector";
import { padScore } from "@/logic/padScore";

export const ScoreBar = (): JSX.Element => {
  const game = useAppSelector((state) => state.game);

  return (
    <div className={styles.scoreBar}>
      <p className={styles.scoreBar__penguins}>
        ペンギン{" "}
        <span className={styles.scoreBar__currentPenguinsNum}>
          {game.penguins.length}
        </span>{" "}
        / {game.maxPenguinsNum}
      </p>
      <div className={styles.scoreBar__scoreGroup}>
        <p className={styles.scoreBar__hiScore}>HI {padScore(game.hiScore)}</p>
        <p className={styles.scoreBar__score}>{padScore(game.score)}</p>
      </div>
    </div>
  );
};
