import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/hero.webp"
          alt="see the world by rail"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-8">
          <div className="text-white text-center sm:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 sm:mb-4">
              See the World by Rail
            </h1>
            <p className="text-lg sm:text-xl mb-4 sm:mb-8">
              Low-carbon itineraries to travel differently.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" className="w-full sm:w-auto">
                Discover Itineraries
              </Button>
              <Button variant="ghost" className="w-full sm:w-auto">
                Request Itinerary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
