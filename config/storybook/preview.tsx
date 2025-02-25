import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProviders";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  decorators: [ThemeDecorator(Theme.LIGHT), (Story) => RouterDecorator(Story)],
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
