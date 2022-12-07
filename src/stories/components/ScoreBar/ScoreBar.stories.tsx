import { ScoreBar } from "./ScoreBar";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default {
  component: ScoreBar,
} as ComponentMeta<typeof ScoreBar>;

export const Standard: ComponentStoryObj<typeof ScoreBar> = {
  args: {},
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <ScoreBar></ScoreBar>
      </AppDndProvider>
    </Provider>
  ),
};
