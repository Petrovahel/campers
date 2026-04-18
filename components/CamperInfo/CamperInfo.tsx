import { CamperDetails } from "@/types/camper";
import { FaStar } from "react-icons/fa";
import css from "./CamperInfo.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  camper: CamperDetails;
};

export default function CamperInfo({ camper }: Props) {
  return (
    <div className={css.campInfo}>
      <h2 className={css.campName}>{camper.name}</h2>

      <div className={css.meta}>
        <p className={css.raiting}>
          <FaStar className={css.iconStar} size={16} />
          {camper.rating} ({camper.totalReviews} Reviews)
        </p>
        <p className={css.location}>
          <FaMapMarkerAlt className={css.icon} size={16} />
          {camper.location}
        </p>
      </div>

      <p className={css.price}>€{camper.price}</p>

      <p className={css.campDesc}>{camper.description}</p>
    </div>
  );
}
