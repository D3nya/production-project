declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare const IS_DEV: boolean;
