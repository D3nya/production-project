import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t("Loading")}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<div className="pageWrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};
