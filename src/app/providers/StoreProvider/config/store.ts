import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducers } from "entities/Counter";

export function createReduxStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducers },
    preloadedState: initialState,
  });
}
