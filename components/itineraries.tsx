import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import { Itinerary } from "@/lib/types";

export default async function Itineraries() {
  const supabase = createClient();

  const { data: itineraries } = await supabase
    .from("itineraries")
    .select("*")
    .eq("status", "PUBLISHED");

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
        <Suspense fallback={<div>Loading...</div>}>
          {itineraries?.map((itinerary: Itinerary, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  {/* <Image src={itinerary.image} alt={itinerary.title} fill /> */}
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
                  <span>From: {itinerary.city0}</span>
                  <span>{itinerary.duration_1}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-[#5f8d4e] text-white">
                <p className="text-sm">{itinerary.description}</p>
              </CardFooter>
            </Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
