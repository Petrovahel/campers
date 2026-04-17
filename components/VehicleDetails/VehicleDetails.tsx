import { CamperDetails } from "@/types/camper";

type Props = {
  camper: CamperDetails;
};

export default function VehicleDetails({ camper }: Props) {
  return (
    <div>
      <h3>Vehicle details</h3>

      {/* badges */}
      <div>
        <span>{camper.transmission}</span>
        <span>{camper.engine}</span>
              <span>{camper.form}</span>
              {camper.amenities.map((item) => (
                  <span key={item}>{item}</span>
              ))}
      </div>

      {/* specs */}
          <ul>
        <li>Form: {camper.form}</li>
        <li>Length: {camper.length}</li>
        <li>Width: {camper.width}</li>
        <li>Height: {camper.height}</li>
        <li>Tank: {camper.tank}</li>
        <li>Consumption: {camper.consumption}</li>
      </ul>
    </div>
  );
}