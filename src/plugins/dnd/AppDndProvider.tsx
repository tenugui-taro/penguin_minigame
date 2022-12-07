import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface AppDndProviderInterface {
  children: JSX.Element;
}

/**
 * ドラッグアンドドロップを有効化する
 */
export const AppDndProvider = ({
  children,
}: AppDndProviderInterface): JSX.Element => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};
