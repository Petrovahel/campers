export type CamperForm =
  | "alcove"
  | "integrated"
  | "panel_van"
  | "semi_integrated";

export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export type Transmission = "automatic" | "manual";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;

  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: Transmission;
  engine: Engine;

  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface GalleryItem {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperDetails extends Camper {
  description: string;
  gallery: GalleryItem[];
  createdAt: string;
  updatedAt: string;
}

export interface BookingResponse {
  message: string;
}
