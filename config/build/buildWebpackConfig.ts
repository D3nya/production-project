import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig({ mode, paths, port, isDev }: BuildOptions): Configuration {
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : false,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
