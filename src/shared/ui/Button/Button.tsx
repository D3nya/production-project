import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, theme, onClick, ...otherProps }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, {}, [styles[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
