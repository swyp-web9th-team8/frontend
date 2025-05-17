import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";
import Nav from "@/components/organisms/Nav";

function CompletedGatheringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <CompletedGatheringHeader title="지난 모임" backButton />
      <div className="bottom-padding flex-1">{children}</div>
      <Nav />
    </div>
  );
}

export default CompletedGatheringLayout;
