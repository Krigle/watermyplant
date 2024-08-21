// Type for the image information
export interface PlantImage {
  id: number;
  license: number;
  license_name: string;
  license_url: string;
  original_url: string;
  regular_url: string;
  medium_url: string;
  small_url: string;
  thumbnail: string;
}

// Type for notes on a plant
export interface PlantNote {
  date: string;
  note: string;
  id: string;
}

// Type for a single plant
export interface Plant {
  id: number;
  common_name: string;
  scientific_name: string; // Array of scientific names
  other_name: string | null; // Optional array of other names
  cycle: string;
  watering: string;
  sunlight: string[]; // Array of sunlight requirements
  default_image: PlantImage; // Image data is now an object
  notes: PlantNote[]; // Notes on the plant
}

// Type for the API response
export interface PlantApiResponse {
  data: Plant[];
  to: number;
  per_page: number;
  current_page: number;
  from: number;
  last_page: number;
  total: number;
}

export type UserPlant = {
  id: number;
  userId: number;
  plantId: number;
  user: User; // Represents the related User object
  plant: Plant; // Represents the related Plant object
  notes: PlantNote[]; // Array of related Note objects
  updatedAt: Date;
  createdAt: Date;
};

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  plants: UserPlant[]; // Array of related UserPlant objects
  updatedAt: Date;
  createdAt: Date;
};
