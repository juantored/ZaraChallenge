import type { MobileInfoColorOption } from "../../types/Mobile";

type ColorMobileProps = {
  colorOption: MobileInfoColorOption;
  isActive: boolean;
  index: number;
  onClick?: (name: string, imageUrl: string, index: number) => void;
  onHover?: (hover: boolean, name: string) => void;
};

function ColorMobile({
  colorOption,
  isActive,
  index,
  onClick,
  onHover,
}: ColorMobileProps) {
  return (
    <>
      <div
        className={`colorCard ${isActive ? "active" : ""}`}
        onClick={() => onClick?.(colorOption.name, colorOption.imageUrl, index)}
        onMouseEnter={() => onHover?.(true, colorOption.name)}
        onMouseLeave={() => onHover?.(false, colorOption.name)}
      >
        <div
          style={{
            backgroundColor: colorOption.hexCode,
          }}
        ></div>
      </div>
    </>
  );
}
export default ColorMobile;
