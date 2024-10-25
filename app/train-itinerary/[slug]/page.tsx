import { createClient } from "@/lib/supabase/server";
import { Itinerary, Leg } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FormNewsletter from "@/components/form-newsletter";

export default async function TrainItinerary({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();

  const { data: itinerary }: { data: Itinerary | null } = await supabase
    .from("itineraries")
    .select("*")
    .eq("slug", params.slug)
    .single();

  const legsIds = itinerary
    ? Array.from(
        { length: parseInt(itinerary?.legs_num) },
        (_, i) => itinerary[`leg${i + 1}` as keyof Itinerary]
      )
    : [];

  const { data: legs }: { data: Leg[] | null } = await supabase
    .from("legs")
    .select("*")
    .in("uuid", legsIds);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>TrainItinerary for slug: {params.slug}</div>
      <div>{itinerary?.titledynamicpage}</div>
      <div className="flex gap-2">
        <span>From:</span> {itinerary?.city0}
        <span>Duration:</span> {itinerary?.duration_1}
        <span>Type:</span> {itinerary?.type}
        <span>Legs:</span> {itinerary?.legs_num}
        <span>Estimated cost:</span> {itinerary?.total_cost}
      </div>
      <div className="text-red-500">MISSING TEXT</div>
      <div>Itinerary overview:</div>
      <div className="flex gap-2">
        <div className="text-red-500">LIST OF LEGS</div>
        {itinerary?.map_url && (
          <Image
            src={itinerary.map_url}
            alt={itinerary.titledynamicpage}
            width={itinerary.map_width}
            height={itinerary.map_height}
            style={{ width: "50%", height: "auto" }}
          />
        )}
      </div>
      <span>
        Do you need help reaching the starting point of this itinerary ?
      </span>
      <div>
        <span>Reaching your starting point</span>
        <span>From:</span>
        <select></select>
        <span>To: {itinerary?.city0}</span>
        <Button>Take me there</Button>
      </div>
      <Button>Return to Itinerary Overview</Button>
      <div className="flex flex-col gap-2">
        <span>Extra tips for this itinerary</span>
        <span>{itinerary?.extra_tip}</span>
      </div>
      <FormNewsletter />
      <div>
        <span>Other itineraries that might interest you...</span>
        <div className="flex gap-2">
          <span className="text-red-500">CARD 1</span>
          <span className="text-red-500">CARD 2</span>
          <span className="text-red-500">CARD 3</span>
        </div>
      </div>
    </div>
  );
}
