import type { MobileInfoStorageOption } from "../../types/Mobile";

type StorageMobileProps = {
  storageOption: MobileInfoStorageOption;
  onClick?: (price: number) => void;
};

function StorageMobile({ storageOption, onClick }: StorageMobileProps) {
  return (
    <>
      <div onClick={() => onClick?.(storageOption.price)}>
        {storageOption.capacity}
      </div>
    </>
  );
}
export default StorageMobile;
