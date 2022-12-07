import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../stores/store";

// store周りの型を扱いやすくする
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
