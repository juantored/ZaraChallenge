import type { MobileInfoColorOption } from "../../types/Mobile";

type ColorMobileProps = {
  colorOption: MobileInfoColorOption;
  onClick?: (name: string, imageUrl: string) => void;
  onHover?: (hover: boolean, name: string) => void;
};

function ColorMobile({ colorOption, onClick, onHover }: ColorMobileProps) {
  return (
    <>
      <div
        className="CardColor"
        onClick={() => onClick?.(colorOption.name, colorOption.imageUrl)}
        onMouseEnter={() => onHover?.(true, colorOption.name)}
        onMouseLeave={() => onHover?.(false, colorOption.name)}
        style={{
          backgroundColor: colorOption.hexCode,
          height: "20px",
          width: "20px",
        }}
      ></div>
    </>
  );
}
export default ColorMobile;
