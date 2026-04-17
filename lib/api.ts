import { Filters, FiltersResponse } from "@/types/filters";
import { CamperDetails, CampersResponse } from "@/types/camper";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) {
    throw new Error("API URL is not defined");
}

export async function fetchCampers(page = 1, filters: Filters = {}): Promise<CampersResponse>{
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("perPage", "4");

  if (filters.location?.trim()) {
  params.append("location", filters.location);
}

if (filters.form) {
  params.append("form", filters.form);
}

if (filters.transmission) {
  params.append("transmission", filters.transmission);
}

if (filters.engine) {
  params.append("engine", filters.engine);
}


    console.log("QUERY:", params.toString());

  const res = await fetch(`${BASE_URL}/campers?${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch campers");
  }

  return res.json();
}

export async function getCamperById(id: string):Promise<CamperDetails> {
  const res = await fetch(`${BASE_URL}/campers/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch camper");
  }

  return res.json();
}

export async function getFilters():Promise <FiltersResponse>{
  const res = await fetch(`${BASE_URL}/campers/filters`);

  if (!res.ok) {
    throw new Error("Failed to fetch filters");
  }

  return res.json();
}

export async function getReviewsByCamperId(id: string) {
  const res = await fetch(`${BASE_URL}/campers/${id}/reviews`);

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}

export async function createBooking(
  camperId: string,
  data: { name: string; email: string }
) {
  const res = await fetch(
    `${BASE_URL}/campers/${camperId}/booking-requests`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create booking");
  }

  return res.json();
}