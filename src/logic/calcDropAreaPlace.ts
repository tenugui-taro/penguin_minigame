import { DropAreaPlace } from "@/types/DropAreaPlace";

export const calcDropAreaPlace = (index: number): DropAreaPlace => {
  let place: DropAreaPlace = {
    side: "left",
    x: 0,
    y: 0,
  };

  if (index < 4) {
    place = {
      ...place,
      y: index * 110,
    };
  } else {
    place = {
      ...place,
      side: "right",
      x: 500,
      y: (index - 4) * 110,
    };
  }

  return place;
};
