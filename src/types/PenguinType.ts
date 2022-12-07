import { PenguinSpecies } from "./PenguinSpecies";

export interface PenguinType {
  id: string;
  species: PenguinSpecies;
  img: string;
  posX: number;
  posY: number;
  dx: number;
  dy: number;
}
