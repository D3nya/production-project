import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation("notFound");
  return <div className={classNames(styles.notFoundPage, {}, [])}>{t("NotFoundPage")}</div>;
};
