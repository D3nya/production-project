import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.RED,
  },
};

export const RedDark: Story = {
  args: {
    children: "AppLink Text",
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
