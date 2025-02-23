import React from "react";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      {t("AboutPage")}
      <Counter />
    </div>
  );
};

export default AboutPage;
