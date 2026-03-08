import type { MobileInfoSpecs } from "../../types/Mobile";
import SpecificationRow from "./SpecificationRow";

type SpecificationMobilesProps = {
  brand: string;
  name: string;
  description: string;
  specs: MobileInfoSpecs;
};

function SpecificationMobile({
  brand,
  name,
  description,
  specs,
}: SpecificationMobilesProps) {
  return (
    <>
      <section>
        <h2></h2>

        <table>
          <tbody>
            <SpecificationRow title="BRAND" value={brand} />
            <SpecificationRow title="NAME" value={name} />
            <SpecificationRow title="DESCRIPTION" value={description} />

            <SpecificationRow title="SCREEN" value={specs.screen} />
            <SpecificationRow title="RESOLUTION" value={specs.resolution} />
            <SpecificationRow title="PROCESSOR" value={specs.processor} />
            <SpecificationRow title="MAIN CAMERA" value={specs.mainCamera} />
            <SpecificationRow
              title="SELFIE CAMERA"
              value={specs.selfieCamera}
            />
            <SpecificationRow title="BATTERY" value={specs.battery} />
            <SpecificationRow title="OS" value={specs.os} />
            <SpecificationRow
              title="SCREEN REFRESH RATE"
              value={specs.screenRefreshRate}
            />
          </tbody>
        </table>
      </section>
    </>
  );
}
export default SpecificationMobile;
