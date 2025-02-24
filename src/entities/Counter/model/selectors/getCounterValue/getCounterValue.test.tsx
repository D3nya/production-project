import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });

  test("should handle null counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: null },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(null);
  });
});
