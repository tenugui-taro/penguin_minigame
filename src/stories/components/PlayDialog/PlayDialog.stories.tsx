import { PlayDialog } from "./PlayDialog";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default {
  component: PlayDialog,
} as ComponentMeta<typeof PlayDialog>;

export const Standard: ComponentStoryObj<typeof PlayDialog> = {
  args: {},
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <PlayDialog></PlayDialog>
      </AppDndProvider>
    </Provider>
  ),
};
