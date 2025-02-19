import React from "react";
import { PartialStoryFn } from "storybook/internal/types";
import { ReactRenderer } from "@storybook/react/*";
import { BrowserRouter } from "react-router";

export const RouterDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
