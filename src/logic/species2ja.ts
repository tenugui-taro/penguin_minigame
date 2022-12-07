import { PenguinSpecies } from "@/types/PenguinSpecies";

export const species2ja = (species: PenguinSpecies): string => {
  switch (species) {
    case "Adelie":
      return "アデリー";
    case "Gentoo":
      return "ジェンツー";
    case "Chinstrap":
      return "ヒゲ";
    case "Emperor":
      return "コウテイ";
    case "Humboldt":
      return "フンボルト";
    case "King":
      return "オウサマ";
    case "Magellanic":
      return "マゼラン";
    case "Rockhopper":
      return "イワトビ";
  }
};
