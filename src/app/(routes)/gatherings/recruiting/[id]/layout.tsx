import RecruitingDetailHeader from "@/components/organisms/header/RecruitingDetailHeader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-gsans-medium flex h-full flex-col">
      <RecruitingDetailHeader
        sharedButton={{
          title: "동네 친구들과 줍깅 챌린지에 도전해보세요!",

          href: "/gatherings/recruiting",
        }}
      >
        모임
      </RecruitingDetailHeader>
      <div className="flex flex-1 flex-col pt-[34px]">{children}</div>
    </div>
  );
}

export default Layout;
