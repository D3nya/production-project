import React from "react";
import styles from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <div className={classNames(styles.loader, {}, [className])}></div>;
};
