import React from "react";
import { Link, LinkProps } from "react-router";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
