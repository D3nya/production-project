import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("about");

  return <div>{t("AboutPage")}</div>;
};

export default AboutPage;
