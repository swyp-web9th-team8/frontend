import CompletedGatheringHeader from "@/components/organisms/header/CompletedGatheringHeader";
import Nav from "@/components/organisms/Nav";

function CompletedGatheringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CompletedGatheringHeader title="지난 모임" backButton />
      <div>{children}</div>
      <Nav />
    </div>
  );
}

export default CompletedGatheringLayout;
