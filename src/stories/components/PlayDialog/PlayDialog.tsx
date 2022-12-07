import {
  addIntervalIds,
  addPenguin,
  initGame,
  updatePos,
} from "@/stores/slices/gameSlice";
import { useAppDispatch } from "@/stores/useAppDispatch";
import { useAppSelector } from "@/stores/useAppSelector";
import styles from "./PlayDialog.module.css";
import Emperor__chick from "@/assets/penguins/Emperor__chick.svg";

export const PlayDialog = (): JSX.Element => {
  const game = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  const startGame = (): void => {
    dispatch(initGame());

    const addId = setInterval(() => {
      dispatch(addPenguin());
    }, 700);
    dispatch(addIntervalIds(addId));

    const updateId = setInterval(() => {
      dispatch(updatePos());
    }, 100);
    dispatch(addIntervalIds(updateId));
  };

  return (
    <>
      <div className={styles.playDialog}>
        {game.score !== 0 && (
          <p>
            your score:{" "}
            <span className={styles.playDialog__score}>{game.score}</span>
          </p>
        )}
        <img className={styles.penguin} src={Emperor__chick} alt="" />
        <button className={styles.playDialog_btn} onClick={startGame}>
          Game Start !!
        </button>
      </div>
    </>
  );
};
