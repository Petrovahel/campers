import { CamperForm, Engine, Transmission } from "./camper";

export interface Filters {
  location?: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;
}

export interface FiltersResponse {
  forms: CamperForm[];
  transmissions: Transmission[];
  engines: Engine[];
}
