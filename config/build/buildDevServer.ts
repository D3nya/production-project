import { PortType } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(port: PortType): DevServerConfiguration {
  return {
    port: port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
