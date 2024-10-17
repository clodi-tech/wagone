export interface Itinerary {
  id: string;
  created_at: string;
  title: string;
  country: string[];
  description: string;
  duration_1: string;
  image_url: string | null;
  city0: string;
  status: string;
  type: "One way" | "Loop";
  nbr_countries: string;
  legs: string;
  duration_2: string;
  intro_dynamicpage: string | null;
  "single/multi": "single country" | "multi country";
  title_dynamicpage: string;
  total_cost: string;
}
