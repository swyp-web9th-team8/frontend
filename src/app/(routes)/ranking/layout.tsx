import RecruitingDetailHeader from "@/components/organisms/header/RecruitingDetailHeader";
import Nav from "@/components/organisms/Nav";

function RankingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-gsans-medium bottom-padding flex-flex-col flex-1">
      <RecruitingDetailHeader
        sharedButton={{
          title: "랭킹",
          text: "확인해보세요!",
          href: "/ranking",
        }}
      >
        랭킹
      </RecruitingDetailHeader>
      {children}
      <Nav />
    </div>
  );
}

export default RankingLayout;
