import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    children: "Button Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Button Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
