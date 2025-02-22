import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  square,
  size = SizeButton.M,
  className,
  theme,
  onClick,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, { ...mods }, [styles[theme], styles[size], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
