import { counterReducers, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  describe("decrement", () => {
    test("should decrement value by 1", () => {
      const state: CounterSchema = { value: 10 };
      expect(counterReducers(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test("should handle decrement when value is 0", () => {
      const state: CounterSchema = { value: 0 };
      expect(counterReducers(state, counterActions.decrement())).toEqual({ value: -1 });
    });

    test("should not mutate the original state", () => {
      const state: CounterSchema = { value: 10 };
      const newState = counterReducers(state, counterActions.decrement());
      expect(newState).toEqual({ value: 9 });
      expect(state).toEqual({ value: 10 });
    });
  });

  describe("increment", () => {
    test("should increment value by 1", () => {
      const state: CounterSchema = { value: 10 };
      expect(counterReducers(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test("should not mutate the original state", () => {
      const state: CounterSchema = { value: 10 };
      const newState = counterReducers(state, counterActions.increment());
      expect(newState).toEqual({ value: 11 });
      expect(state).toEqual({ value: 10 });
    });
  });

  describe("initial state", () => {
    test("should return initial state if no state is provided", () => {
      expect(counterReducers(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
  });
});
