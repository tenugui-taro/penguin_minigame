import styles from "./Penguin.module.css";
import { DragPreviewImage, useDrag } from "react-dnd";
import { useAppSelector } from "@/stores/useAppSelector";
import { ItemTypes } from "@/plugins/dnd/ItemTypes";
import { PenguinSpecies } from "@/types/PenguinSpecies";

interface PenguinInterface {
  id: string;
  species: PenguinSpecies;
  img: string;
  posX: number;
  posY: number;
}

export const Penguin = ({
  id,
  species,
  img,
  posX,
  posY,
}: PenguinInterface): JSX.Element => {
  const game = useAppSelector((state) => state.game);

  // ドラッグ適用
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.PENGUIN,
    options: {
      dropEffect: "move",
    },
    item: {
      id,
      species,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      {game.isGameOver ? (
        <>
          <img
            draggable={false}
            className={styles.penguin}
            style={{
              left: posX,
              top: posY,
            }}
            src={img}
            alt=""
          />
        </>
      ) : (
        <>
          <DragPreviewImage
            // プレビュー画像設定
            connect={preview}
            src={img}
          />
          <img
            ref={drag}
            className={styles.penguin}
            style={{
              cursor: "grab",
              opacity: isDragging ? 0 : 1,
              left: posX,
              top: posY,
            }}
            src={img}
            alt=""
          />
        </>
      )}
    </>
  );
};
