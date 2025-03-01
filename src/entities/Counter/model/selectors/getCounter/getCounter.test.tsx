import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });

  test("should handle null counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: null },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: null });
  });
});
