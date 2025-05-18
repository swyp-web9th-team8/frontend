import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";

function GatheringDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <CompletedGatheringHeader title="완료된 모임" backButton />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export default GatheringDetailLayout;
