import { DropArea } from "./DropArea";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default {
  component: DropArea,
} as ComponentMeta<typeof DropArea>;

export const Standard: ComponentStoryObj<typeof DropArea> = {
  args: {
    validSpecies: "Adelie",
    place: {
      side: "left",
      x: 10,
      y: 10,
    },
  },
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <DropArea {...args}></DropArea>
      </AppDndProvider>
    </Provider>
  ),
};
