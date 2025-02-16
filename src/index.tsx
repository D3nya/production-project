import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";
import "shared/config/i18n/i18n";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
