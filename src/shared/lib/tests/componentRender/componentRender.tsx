import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface componentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = "/", initialState = { counter: { value: 10 } } } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
      </MemoryRouter>
    </StoreProvider>
  );
}
