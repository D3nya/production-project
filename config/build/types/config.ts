export type BuildMode = "production" | "development";

export type PortType = number;

export type IsDevType = boolean;

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export interface BuildEnv {
  mode: BuildMode;
  port: PortType;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: IsDevType;
  port: PortType;
}
