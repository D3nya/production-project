import { Link, Route, Routes } from "react-router";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AnoutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
