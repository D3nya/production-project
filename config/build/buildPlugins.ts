import { WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths, IsDevType } from "./types/config";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";

export function buildPlugins(paths: BuildPaths, isDev: IsDevType): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
