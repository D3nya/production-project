import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageError.module.scss";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t("ErrorPage")}</p>
      <Button onClick={reloadPage}>{t("RefreshPage")}</Button>
    </div>
  );
};
