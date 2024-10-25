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
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function Itineraries() {
  const supabase = createClient();

  const { data: itineraries } = await supabase
    .from("itineraries")
    .select("*")
    .eq("status", "PUBLISHED");

  return (
    <div id="itineraries" className="container mx-auto px-12 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        FIND YOUR NEXT ADVENTURE
      </h1>

      <div className="mb-8 flex justify-center">
        <select className="w-80 p-1 text-sm border border-gray-300 rounded">
          <option>Select Country</option>
          {/* Add country options here */}
        </select>
      </div>

      {/* Updated grid layout to limit to 3 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        <Suspense fallback={<div>Loading...</div>}>
          {itineraries?.map((itinerary: Itinerary) => (
            <Link
              href={`/train-itinerary/${itinerary.slug}`}
              key={itinerary.id}
            >
              <Card className="w-full text-center bg-primary text-white">
                <CardHeader className="p-3">
                  {" "}
                  {/* Reduced padding here */}
                  <CardTitle className="mb-1 font-normal text-lg">
                    {itinerary.title}
                  </CardTitle>{" "}
                  {/* Reduced margin below title */}
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={itinerary.image_url || "/placeholder.webp"}
                      alt={itinerary.title}
                      width={1200}
                      height={800}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <Badge className="absolute top-2 right-2 bg-accent">
                      {itinerary.type}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 p-3">
                  {/* Box for 'From' and 'Duration' */}
                  <div className="flex justify-between items-center w-full text-white italic">
                    <span>From: {itinerary.city0}</span>
                    <span>{itinerary.duration_1}</span>
                  </div>
                  {/* Box for the description */}
                  <div className="w-full p-2 border-t border-b border-gray-300 bg-secondary text-black -mx-3">
                    <p className="text-sm">{itinerary.description}</p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
