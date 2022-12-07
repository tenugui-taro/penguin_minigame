import styles from "./DropArea.module.css";
import { ItemTypes } from "@/plugins/dnd/ItemTypes";
import { PenguinSpecies } from "@/types/PenguinSpecies";
import { useDrop } from "react-dnd";
import { useAppDispatch } from "@/stores/useAppDispatch";
import {
  decrementScore,
  incrementScore,
  removePenguin,
} from "@/stores/slices/gameSlice";
import clsx from "clsx";
import { DropAreaPlace } from "@/types/DropAreaPlace";
import { species2ja } from "@/logic/species2ja";
import { Tween24 } from "tween24";

interface DropAreaInterface {
  index: number;
  validSpecies: PenguinSpecies;
  place: DropAreaPlace;
}

export const DropArea = ({
  index,
  validSpecies,
  place,
}: DropAreaInterface): JSX.Element => {
  const dispatch = useAppDispatch();

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.PENGUIN,
    drop: ({ id, species }: { id: string; species: PenguinSpecies }) => {
      const isValid = species === validSpecies;
      if (isValid) {
        dispatch(incrementScore());
      } else {
        dispatch(decrementScore());
      }
      changeBgColor(isValid);

      dispatch(removePenguin(id));
    },
    collect: (monitor) => ({
      clientOffset: monitor.getClientOffset(),
    }),
  }));

  const changeBgColor = (isValid: boolean): void => {
    Tween24.serial(
      Tween24.tween(`#dropArea__${validSpecies}`, 0.075).backgroundColor(
        isValid ? "#C0EEE4" : "#FF9E9E"
      ),
      Tween24.prop(`#dropArea__${validSpecies}`).backgroundColor("#f4f5f6")
    ).play();
  };

  return (
    <>
      <div
        id={`dropArea__${validSpecies}`}
        ref={drop}
        className={clsx(
          styles.dropArea,
          place.side === "left" ? styles.dropArea__left : styles.dropArea__right
        )}
        style={{
          left: place.x,
          top: place.y,
          borderBottomWidth: index === 3 || index === 7 ? 0 : "1px",
        }}
      >
        <p>{species2ja(validSpecies)}</p>
      </div>
    </>
  );
};
