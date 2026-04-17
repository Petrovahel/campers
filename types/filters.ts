export type Filters = {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
};

export type FiltersResponse = {
  forms: string[];
  transmissions: string[];
  engines: string[];
};