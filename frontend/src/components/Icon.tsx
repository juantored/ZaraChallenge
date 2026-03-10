// ?react funcionalidad del paquete vite-plugin-svgr
import Logo from "../assets/logo.svg?react";
import Bag from "../assets/bag.svg?react";
import Back from "../assets/back.svg?react";
import BagFull from "../assets/bagFull.svg?react";
import type { SVGProps } from "react";

// Creamos un objeto con todos los svg que queremos que se importen
const Icons = {
  Logo: Logo,
  Bag: Bag,
  BagFull: BagFull,
  Back: Back,
};

// Creamos un tipo basado en Icons para extrar las claves y asi permitir sugerencias
type IconName = keyof typeof Icons;

// Necesario indicarle el nombre
// SVGProps<SVGSVGElement> permite indicarle cualquier prop de elemento
type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

function Icon({ name, ...props }: IconProps) {
  const SvgIcon = Icons[name];

  if (!SvgIcon) return null;

  return <SvgIcon {...props} />;
}
export default Icon;
