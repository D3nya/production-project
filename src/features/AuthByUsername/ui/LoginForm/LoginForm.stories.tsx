import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { isLoading: false, username: "123", password: "asd" } })],
};

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { isLoading: false, username: "123", password: "asd" } }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { isLoading: false, username: "123", password: "asd", error: "error" } })],
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { isLoading: true, username: "123", password: "asd" } })],
};
