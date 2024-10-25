import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/hero.webp"
        alt="see the world by rail"
        width={2380}
        height={1024}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      />
      <div className="absolute inset-0 flex flex-col gap-2 sm:gap-4 items-start justify-end text-primary-foreground bg-black bg-opacity-30 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          See the World by Rail
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Low-carbon itineraries to travel differently.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/#itineraries">
            <Button className="bg-white text-black hover:bg-primary hover:text-white">
              Discover Itineraries
            </Button>
          </Link>
          <Button className="bg-white text-black hover:bg-primary hover:text-white">
            Request Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
}
