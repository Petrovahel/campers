import { Camper } from "@/types/camper";
import Link from "next/link";
import css from "./CamperCard.module.css";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { TbCamper } from "react-icons/tb";
import Image from "next/image";

type Props = {
  camper: Camper;
};

export default function CamperCard({ camper }: Props) {
  return (
    <li className={css.camperInList}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={300}
        height={200}
        className={css.camperImg}
      />
      <div className={css.camperInfo}>
        <div className={css.camperHeader}>
          <h2 className={css.title}>{camper.name}</h2>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <p className={css.meta}>
          <span className={css.rating}>
            <FaStar className={css.iconStar} size={16} />
            {camper.rating}
            <span className={css.reviews}>({camper.totalReviews} Reviews)</span>
          </span>

          <span className={css.location}>
            <FaMapMarkerAlt className={css.icon} size={16} />
            {camper.location}
          </span>
        </p>
        <div className={css.features}>
          <span className={css.featureItem}>
            <GiGasPump size={20} /> {camper.engine}
          </span>

          <span className={css.featureItem}>
            <MdOutlineSettings size={20} /> {camper.transmission}
          </span>

          <span className={css.featureItem}>
            <TbCamper size={20} /> {camper.form}
          </span>
        </div>
        <Link
          href={`/campers/${camper.id}`}
          target="_blank"
          className={css.moreBtn}
        >
          Load more
        </Link>
      </div>
    </li>
  );
}
