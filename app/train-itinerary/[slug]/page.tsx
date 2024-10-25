export default function TrainItinerary({
  params,
}: {
  params: { slug: string };
}) {
  return <div>TrainItinerary for slug: {params.slug}</div>;
}
