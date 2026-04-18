import CamperGallery from "../CamperGallery/CamperGallery";
import CamperInfo from "../CamperInfo/CamperInfo";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./CamperDetails.module.css";

import { CamperDetails as CamperType } from "@/types/camper";

type Props = {
  camper: CamperType;
};

export default function CamperDetails({ camper }: Props) {
  return (
    <div className={css.detailsContainer}>
      <div className={css.gallery}>
        <CamperGallery gallery={camper.gallery} />
      </div>
      <div className={css.infoContainer}>
        <CamperInfo camper={camper} />

        <VehicleDetails camper={camper} />
      </div>
    </div>
  );
}
