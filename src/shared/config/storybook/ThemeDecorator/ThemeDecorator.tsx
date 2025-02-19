import React from "react";
import { PartialStoryFn } from "storybook/internal/types";
import { Theme } from "app/providers/ThemeProviders";
import { ReactRenderer } from "@storybook/react/*";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) => (
  <div className={`app ${theme}`} style={{ minHeight: "auto" }}>
    <Story />
  </div>
);
