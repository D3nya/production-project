import React from "react";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t } = useTranslation("main");

  return <div>{t("MainPage")}</div>;
};

export default MainPage;
