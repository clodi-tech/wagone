export interface Itinerary {
  title: string;
  type: "One way" | "Loop";
  image: string;
  from: string;
  duration: string;
  stops: string[];
}
