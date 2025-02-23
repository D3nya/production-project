import { PartialStoryFn } from "storybook/internal/types";
import { Theme, ThemeProvider } from "app/providers/ThemeProviders";
import { ReactRenderer } from "@storybook/react/*";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) => {
  document.body.className = theme;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`${theme}`} style={{ minHeight: "auto" }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
