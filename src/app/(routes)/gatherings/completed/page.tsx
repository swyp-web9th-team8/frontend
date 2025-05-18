import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";
import Nav from "@/components/organisms/Nav";
import GatheringCompletedTemplate from "@/components/templates/GatheringCompletedTemplate";

export default function GatheringCompletedPage() {
  return (
    <div className="flex flex-col gap-5">
      <CompletedGatheringHeader title="지난 모임" backButton />
      <h1 className="justify-start text-xl leading-normal font-bold text-[#1A1A1A]">
        동네에 이런 모임이 있었어요 🔥
      </h1>
      <GatheringCompletedTemplate />
      <Nav />
    </div>
  );
}
