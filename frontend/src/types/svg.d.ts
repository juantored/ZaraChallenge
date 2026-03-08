// Declaración para que al importar un svg con el paquete vite-plugin-svgr no de error en Visual Code
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default ReactComponent;
}