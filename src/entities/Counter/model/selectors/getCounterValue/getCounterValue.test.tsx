import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state)).toEqual(10);
  });

  test("should handle null counter value", () => {
    const state: StateSchema = {
      counter: { value: null },
    };
    expect(getCounterValue(state)).toEqual(null);
  });
});
