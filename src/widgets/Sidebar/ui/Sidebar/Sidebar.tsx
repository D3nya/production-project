import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.XL}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={styles.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t("Main")}</span>
        </AppLink>

        <div className={styles.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.item}>
            <AboutIcon className={styles.icon} />
            <span className={styles.link}>{t("About")}</span>
          </AppLink>
        </div>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
      {children}
    </div>
  );
};
