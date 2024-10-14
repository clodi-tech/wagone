import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Itinerary {
  title: string;
  type: "One way" | "Loop";
  image: string;
  from: string;
  duration: string;
  stops: string[];
}

const itineraries: Itinerary[] = [
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

export default function Itineraries() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        FIND YOUR NEXT ADVENTURE
      </h1>

      <div className="mb-6">
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Select Country</option>
          {/* Add country options here */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraries.map((itinerary, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  objectFit="cover"
                />
                <div className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-1 rounded">
                  {itinerary.type}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 bg-[#5f8d4e] text-white">
              <CardTitle className="text-xl font-semibold mb-2 text-white">
                {itinerary.title}
              </CardTitle>
              <div className="flex justify-between items-center mb-2">
                <span>From: {itinerary.from}</span>
                <span>{itinerary.duration}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 bg-[#5f8d4e] text-white">
              <p className="text-sm">{itinerary.stops.join(" - ")}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
