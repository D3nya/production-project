import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { counterReducer } from "entities/Counter";
import { loginReducer } from "features/AuthByUsername";

export function createReduxStore(initialState?: StateSchema) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: RootReducers,
    preloadedState: initialState,
  });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
