import { PenguinSpecies } from "@/types/PenguinSpecies";
import AdelieImg from "@/assets/penguins/Adelie.svg";
import GentooImg from "@/assets/penguins/Gentoo.svg";
import ChinstrapImg from "@/assets/penguins/Chinstrap.svg";
import KingImg from "@/assets/penguins/King.svg";
import HumboldtImg from "@/assets/penguins/Humboldt.svg";
import MagellanicImg from "@/assets/penguins/Magellanic.svg";
import RockhopperImg from "@/assets/penguins/Rockhopper.svg";
import EmperorImg from "@/assets/penguins/Emperor.svg";

export const PenguinsMap: Array<{ species: PenguinSpecies; img: string }> = [
  { species: "Adelie", img: AdelieImg },
  { species: "Gentoo", img: GentooImg },
  { species: "Chinstrap", img: ChinstrapImg },
  { species: "King", img: KingImg },
  { species: "Humboldt", img: HumboldtImg },
  { species: "Magellanic", img: MagellanicImg },
  { species: "Rockhopper", img: RockhopperImg },
  { species: "Emperor", img: EmperorImg },
];
