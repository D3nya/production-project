import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IsDevType } from "../types/config";

export function buildSassLoader(isDev: IsDevType) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            namedExport: false,
            exportLocalsConvention: "as-is",
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
}
