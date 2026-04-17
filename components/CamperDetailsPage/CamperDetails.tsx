import CamperGallery from "../CamperGallery/CamperGallery";
import CamperInfo from "../CamperInfo/CamperInfo";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

import { CamperDetails as CamperType } from "@/types/camper";

type Props = {
  camper: CamperType;
};

export default function CamperDetails({ camper }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <CamperGallery gallery={camper.gallery} />
        <CamperInfo camper={camper} />
      </div>
      <VehicleDetails camper={camper} />
    </div>
  );
}