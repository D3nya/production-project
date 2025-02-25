import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Title lorem ipsun",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: "Description Description Description Description",
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: "Description Description Description Description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
