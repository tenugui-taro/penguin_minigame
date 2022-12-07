import { DropArea } from "../DropArea/DropArea";
import { Penguin } from "../Penguin/Penguin";
import { useAppSelector } from "@/stores/useAppSelector";
import { PenguinsMap } from "@/logic/PenguinsMap";
import styles from "./PlayArea.module.css";
import { calcDropAreaPlace } from "@/logic/calcDropAreaPlace";
import { PlayDialog } from "../PlayDialog/PlayDialog";

export const PlayArea = (): JSX.Element => {
  const { penguins, isGameOver } = useAppSelector((state) => state.game);

  return (
    <div className={styles.playArea}>
      {penguins.map(({ id, species, img, posX, posY }) => (
        <Penguin
          key={id}
          id={id}
          species={species}
          img={img}
          posX={posX}
          posY={posY}
        />
      ))}

      {PenguinsMap.map(({ species }, index) => (
        <DropArea
          key={species}
          index={index}
          validSpecies={species}
          place={calcDropAreaPlace(index)}
        ></DropArea>
      ))}

      {isGameOver && <PlayDialog></PlayDialog>}
    </div>
  );
};
