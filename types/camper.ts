export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  transmission: string;
  engine: string;
  coverImage: string;
  totalReviews: number;
};

export type CamperDetails = {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;

  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: string;
  engine: string;

  amenities: string[];

  gallery: {
    id: string;
    thumb: string;
    original: string;
  }[];
};

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
};
