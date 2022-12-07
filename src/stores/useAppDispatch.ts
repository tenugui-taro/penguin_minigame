import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";

// store周りの型を扱いやすくする
export const useAppDispatch: () => AppDispatch = useDispatch;
