import Image from "next/image";
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
      <div className="absolute inset-0 flex flex-col gap-4 items-start justify-end text-secondary bg-black bg-opacity-30 px-24 py-16">
        <h1 className="text-5xl font-bold">See the World by Rail</h1>
        <p className="text-xl">Low-carbon itineraries to travel differently.</p>
        <div className="flex gap-4">
          <Button variant="secondary">Discover Itineraries</Button>
          <Button variant="ghost">Request Itinerary</Button>
        </div>
      </div>
    </section>
  );
}
