import { GameController } from "./GameController";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default {
  component: GameController,
} as ComponentMeta<typeof GameController>;

export const Standard: ComponentStoryObj<typeof GameController> = {
  args: {},
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <GameController></GameController>
      </AppDndProvider>
    </Provider>
  ),
};
