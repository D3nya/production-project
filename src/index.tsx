import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
