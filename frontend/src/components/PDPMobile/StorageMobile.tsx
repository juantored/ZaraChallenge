import type { MobileInfoStorageOption } from "../../types/Mobile";

type StorageMobileProps = {
  storageOption: MobileInfoStorageOption;
  isActive: boolean;
  index: number;
  onClick?: (price: number, capacity: string, index: number) => void;
};

function StorageMobile({
  storageOption,
  isActive,
  index,
  onClick,
}: StorageMobileProps) {
  return (
    <>
      <div
        className={`storageMobile ${isActive ? "active" : ""}`}
        onClick={() =>
          onClick?.(storageOption.price, storageOption.capacity, index)
        }
      >
        {storageOption.capacity}
      </div>
    </>
  );
}
export default StorageMobile;
