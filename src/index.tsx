import { createRoot } from "react-dom/client";
import { App } from "app/App";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "app/providers/ThemeProviders";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import "app/styles/index.scss";
import "shared/config/i18n/i18n";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
