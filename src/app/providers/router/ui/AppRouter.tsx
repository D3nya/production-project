import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="pageWrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
