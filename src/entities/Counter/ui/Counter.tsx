import React from "react";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h3 data-testid="value-title">{counterValue}</h3>
      <Button data-testid="increment-btn" onClick={increment}>
        {t("Increment")}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t("Decrement")}
      </Button>
    </>
  );
};
