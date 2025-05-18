import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";
import Nav from "@/components/organisms/Nav";
import GatheringCompletedTemplate from "@/components/templates/GatheringCompletedTemplate";

export default function GatheringCompletedPage() {
  return (
    <div className="flex flex-col gap-5">
      <CompletedGatheringHeader title="지난 모임" backButton />
      <GatheringCompletedTemplate />
      <Nav />
    </div>
  );
}
