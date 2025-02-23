import { PartialStoryFn } from "storybook/internal/types";
import { ReactRenderer } from "@storybook/react/*";
import { StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
