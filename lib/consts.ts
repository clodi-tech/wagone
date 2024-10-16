import { Itinerary } from "@/lib/types";

export const itineraries: Itinerary[] = [
  {
    title: "Amsterdam to Krakow",
    type: "One way",
    image: "/images/amsterdam.webp",
    from: "Amsterdam",
    duration: "1+ week",
    stops: ["Amsterdam", "Berlin", "Gdansk", "Warsaw", "Krakow"],
  },
  {
    title: "Andalusia",
    type: "Loop",
    image: "/images/andalusia.webp",
    from: "Sevilla",
    duration: "1-2 weeks",
    stops: ["Sevilla", "Cordoba", "Ronda", "Granada", "Malaga", "Cadiz"],
  },
  {
    title: "Around the Baltic Sea",
    type: "Loop",
    image: "/images/baltic-sea.webp",
    from: "Copenhagen",
    duration: "3-4 weeks",
    stops: [
      "Copenhagen",
      "Stockholm",
      "Helsinki",
      "Tallinn",
      "Riga",
      "Vilnius",
      "Warsaw",
      "Gdansk",
      "Berlin",
      "Hamburg",
    ],
  },
];
