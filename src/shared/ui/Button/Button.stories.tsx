import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, SizeButton, ThemeButton } from "./Button";
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

// PRIMARY

export const PrimarySizeMLight: Story = {
  args: {
    children: "Button Text",
    size: SizeButton.M,
  },
};

export const PrimarySizeLLight: Story = {
  args: {
    children: "Button Text",
    size: SizeButton.L,
  },
};

export const PrimarySizeXlLight: Story = {
  args: {
    children: "Button Text",
    size: SizeButton.XL,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Button Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// CLEAR

export const ClearSizeMLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
    size: SizeButton.M,
  },
};

export const ClearSizeLLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
    size: SizeButton.L,
  },
};

export const ClearSizeXlLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
    size: SizeButton.XL,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// OUTLINE

export const OutlineSizeMLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M,
  },
};

export const OutlineSizeLLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};

export const OutlineSizeXlLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// BACKGROUND

export const BackgroundSizeMLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND,
    size: SizeButton.M,
  },
};

export const BackgroundSizeLLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND,
    size: SizeButton.L,
  },
};

export const BackgroundSizeXlLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND,
    size: SizeButton.XL,
  },
};

export const BackgroundDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// BACKGROUND INVERTED

export const BackgroundInvertedSizeMLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.M,
  },
};

export const BackgroundInvertedSizeLLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.L,
  },
};

export const BackgroundInvertedSizeXlLight: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.XL,
  },
};

export const BackgroundInvertedDark: Story = {
  args: {
    children: "Button Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// SQUARE

export const SquareSizeMLight: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
  },
};

export const SquareSizeLLight: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
  },
};

export const SquareSizeXlLight: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
  },
};

export const SquareDark: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
