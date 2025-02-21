import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang} className={classNames(styles.langSwitcher, {}, [className])}>
      {t(short ? "shortLanguage" : "Language")}
    </Button>
  );
};
