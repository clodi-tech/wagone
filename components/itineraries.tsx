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
import { Badge } from "@/components/ui/badge";

export default async function Itineraries() {
  const supabase = createClient();

  const { data: itineraries } = await supabase
    .from("itineraries")
    .select("*")
    .eq("status", "PUBLISHED");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        FIND YOUR NEXT ADVENTURE
      </h1>

      <div className="mb-6">
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Select Country</option>
          {/* Add country options here */}
        </select>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        <Suspense fallback={<div>Loading...</div>}>
          {itineraries?.map((itinerary: Itinerary) => (
            <Card
              key={itinerary.id}
              className="flex-1 min-w-[250px] w-full md:max-w-md"
            >
              <CardHeader>
                <CardTitle>{itinerary.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.webp"
                    alt={itinerary.title}
                    width={1200}
                    height={800}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Badge className="absolute top-2 right-2">
                    {itinerary.type}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center w-full">
                  <span>From: {itinerary.city0}</span>
                  <span>{itinerary.duration_1}</span>
                </div>
                <p className="text-sm">{itinerary.description}</p>
              </CardFooter>
            </Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
