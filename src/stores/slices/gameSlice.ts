import { v4 as uuidv4 } from "uuid";
import { PenguinType } from "@/types/PenguinType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PenguinsMap } from "@/logic/PenguinsMap";

interface GameState {
  penguins: PenguinType[];
  maxPenguinsNum: number;
  score: number;
  hiScore: number;
  isGameOver: boolean;
  intervalIds: NodeJS.Timer[];
}

const generateRandomPenguin = (): PenguinType => {
  const randomRadians = Math.floor(Math.random() * 361) * (Math.PI / 180);
  const randomPenguin =
    PenguinsMap[Math.floor(Math.random() * PenguinsMap.length)];

  return {
    id: uuidv4(),
    species: randomPenguin.species,
    img: randomPenguin.img,
    posX: Math.floor(Math.random() * (450 - 100) + 100),
    posY: Math.floor(Math.random() * (390 - 0) + 0),
    dx: Math.cos(randomRadians) * 5,
    dy: Math.sin(randomRadians) * 5,
  };
};

const initialState: GameState = {
  penguins: [],
  maxPenguinsNum: 10,
  score: 0,
  hiScore: 0,
  isGameOver: true,
  intervalIds: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initGame: (state) => {
      state.isGameOver = false;
      state.intervalIds.forEach(clearInterval);
      state.intervalIds = [];
      state.score = 0;
      state.penguins = [];
    },
    addPenguin: (state) => {
      if (state.penguins.length >= state.maxPenguinsNum) {
        // gameOver処理
        state.isGameOver = true;
        state.intervalIds.forEach(clearInterval);
        state.intervalIds = [];
        if (state.hiScore < state.score) {
          state.hiScore = state.score;
        }
        return;
      }
      state.penguins.push(generateRandomPenguin());
    },
    removePenguin: (state, action: PayloadAction<string>) => {
      if (!state.isGameOver) {
        state.penguins = state.penguins.filter((p) => p.id !== action.payload);
      }
    },
    updatePos: (state) => {
      state.penguins = state.penguins.map((p) => {
        if (p.posX + p.dx < 100 || p.posX + p.dx > 450) {
          p.dx = -p.dx;
        }

        if (p.posY + p.dy < 0 || p.posY + p.dy > 390) {
          p.dy = -p.dy;
        }

        return { ...p, posX: p.posX + p.dx, posY: p.posY + p.dy };
      });
    },
    addIntervalIds: (state, action: PayloadAction<NodeJS.Timer>) => {
      state.intervalIds.push(action.payload);
    },
    incrementScore: (state) => {
      if (!state.isGameOver) {
        state.score += 10;
      }
    },
    decrementScore: (state) => {
      if (!state.isGameOver) {
        state.score === 0 ? (state.score = 0) : (state.score -= 10);
      }
    },
  },
});

export const {
  initGame,
  addPenguin,
  removePenguin,
  updatePos,
  addIntervalIds,
  incrementScore,
  decrementScore,
} = gameSlice.actions;
export default gameSlice.reducer;
