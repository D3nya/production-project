import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { counterReducer } from "entities/Counter";

export function createReduxStore(initialState: StateSchema) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: RootReducers,
    preloadedState: initialState,
  });
}
