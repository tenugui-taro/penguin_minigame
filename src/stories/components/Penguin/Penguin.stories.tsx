import { Penguin } from "./Penguin";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

import img from "@/assets/penguins/King__chick.svg";

export default {
  component: Penguin,
} as ComponentMeta<typeof Penguin>;

export const Standard: ComponentStoryObj<typeof Penguin> = {
  args: {
    img,
  },
  render: (args) => (
    <Provider store={store}>
      <AppDndProvider>
        <Penguin {...args}></Penguin>
      </AppDndProvider>
    </Provider>
  ),
};
