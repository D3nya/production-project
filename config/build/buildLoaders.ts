import { RuleSetRule } from "webpack";
import { IsDevType } from "./types/config";
import { buildSassLoader } from "./loaders/buildSassLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

export function buildLoaders(isDev: IsDevType): RuleSetRule[] {
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        targets: "defaults",
        presets: [["@babel/preset-env"]],
      },
    },
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = buildSassLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, sassLoader];
}
