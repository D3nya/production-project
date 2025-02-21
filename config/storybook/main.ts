import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildSassLoader } from "../build/loaders/buildSassLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  webpackFinal: async (config: Configuration) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    const paths: BuildPaths = {
      entry: "",
      build: "",
      html: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules.push(buildSassLoader(true));

    const imageRule = config.module.rules.find((rule) => rule?.["test"]?.test(".svg"));
    if (imageRule) {
      imageRule["exclude"] = /\.svg$/;
    }

    config.module.rules.push(buildSvgLoader());

    return config;
  },
};
export default config;
