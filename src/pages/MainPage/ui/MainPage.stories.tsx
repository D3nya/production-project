import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { MainPageAsync as MainPage } from "./MainPage.async";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
