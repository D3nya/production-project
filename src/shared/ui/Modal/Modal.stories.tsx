import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    loki: { skip: true },
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis hic unde libero repudiandae ducimus dolore et obcaecati sint praesentium. Maiores ipsa velit ullam nemo vitae fuga nihil architecto voluptatibus mollitia!",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis hic unde libero repudiandae ducimus dolore et obcaecati sint praesentium. Maiores ipsa velit ullam nemo vitae fuga nihil architecto voluptatibus mollitia!",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
