import { PlayArea } from "./PlayArea";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default {
  component: PlayArea,
} as ComponentMeta<typeof PlayArea>;

export const Standard: ComponentStoryObj<typeof PlayArea> = {
  args: {},
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <PlayArea></PlayArea>
      </AppDndProvider>
    </Provider>
  ),
};
