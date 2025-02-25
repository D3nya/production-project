import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
