import { screen, waitFor } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { userEvent } from "@storybook/test";

describe("Counter", () => {
  describe("render", () => {
    test("should render with initial state", async () => {
      componentRender(<Counter />);
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
      });
    });

    test("should render with initial value 0 if state is empty", async () => {
      componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("0");
      });
    });
  });

  describe("increment", () => {
    test("should increment value by 1", async () => {
      componentRender(<Counter />);
      userEvent.click(screen.getByTestId("increment-btn"));
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
      });
    });

    test("should increment value from 0 to 1", async () => {
      componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
      userEvent.click(screen.getByTestId("increment-btn"));
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("1");
      });
    });
  });

  describe("decrement", () => {
    test("should decrement value by 1", async () => {
      componentRender(<Counter />);
      userEvent.click(screen.getByTestId("decrement-btn"));
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
      });
    });

    test("should decrement value from 0 to -1", async () => {
      componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
      userEvent.click(screen.getByTestId("decrement-btn"));
      await waitFor(() => {
        expect(screen.getByTestId("value-title")).toHaveTextContent("-1");
      });
    });
  });
});
