import GatheringRecruiting from "@/components/templates/gatheringRecruiting";

async function GatheringRecruitingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <GatheringRecruiting id={Number(id)} />;
}

export default GatheringRecruitingPage;
