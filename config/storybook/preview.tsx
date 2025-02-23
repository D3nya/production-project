import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "../../src/app/providers/ThemeProviders";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  decorators: [ThemeDecorator(Theme.LIGHT), (Story) => RouterDecorator(Story), (Story) => StoreDecorator(Story)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
