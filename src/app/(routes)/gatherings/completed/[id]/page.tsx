import GatheringCompletedDetail from "@/components/templates/GatheringCompletedDetail";

async function GatheringDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <GatheringCompletedDetail id={Number(id)} />;
}

export default GatheringDetailPage;
