import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = ({ children, className, theme, ...otherProps }) => {
  return (
    <button type="button" className={classNames(styles.button, {}, [styles[theme], className])} {...otherProps}>
      {children}
    </button>
  );
};
