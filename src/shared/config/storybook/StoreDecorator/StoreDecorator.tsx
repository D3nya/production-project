/* eslint-disable react/display-name */
import { ReactRenderer } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { PartialStoryFn } from "storybook/internal/types";

export const StoreDecorator = (state: Partial<StateSchema>) => (Story: PartialStoryFn<ReactRenderer>) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
