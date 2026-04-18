import { CamperDetails } from "@/types/camper";
import css from "./VehicleDetails.module.css";

type Props = {
  camper: CamperDetails;
};

export default function VehicleDetails({ camper }: Props) {
  return (
    <div className={css.vehicleContainer}>
      <div className={css.vechicleHead}>
        <h3 className={css.vihicleTitle}>Vehicle details</h3>

        <div className={css.mainDetails}>
          <span className={css.mainItem}>{camper.transmission}</span>
          <span className={css.mainItem}>{camper.engine}</span>
          <span className={css.mainItem}>{camper.form}</span>
          {camper.amenities.map((item) => (
            <span className={css.mainItem} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span>Form</span>
          <span className={css.value}>
            {camper.form
              .replace("_", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
        </li>

        <li className={css.detailsItem}>
          <span>Length</span>
          <span>{camper.length} </span>
        </li>

        <li className={css.detailsItem}>
          <span>Width</span>
          <span>{camper.width} </span>
        </li>

        <li className={css.detailsItem}>
          <span>Height</span>
          <span>{camper.height} </span>
        </li>

        <li className={css.detailsItem}>
          <span>Tank</span>
          <span>{camper.tank} </span>
        </li>

        <li className={css.detailsItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
