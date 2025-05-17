import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";

function GatheringDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CompletedGatheringHeader title="완료된 모임" backButton />
      <div>{children}</div>
    </div>
  );
}

export default GatheringDetailLayout;
