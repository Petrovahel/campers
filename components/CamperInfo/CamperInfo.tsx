import { CamperDetails } from "@/types/camper";

type Props = {
  camper: CamperDetails;
};

export default function CamperInfo({ camper }: Props) {
  return (
    <div>
      <h1>{camper.name}</h1>

      <p>
        ⭐ {camper.rating} ({camper.totalReviews} Reviews)
      </p>

      <p>{camper.location}</p>

      <h2>€{camper.price}</h2>

      <p>{camper.description}</p>
    </div>
  );
}