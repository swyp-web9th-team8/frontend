import RecruitingDetailHeader from "@/components/organisms/header/RecruitingDetailHeader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-gsans-medium flex h-full flex-col">
      <RecruitingDetailHeader
        sharedButton={{
          title: "현재 모집중인 모임",
          text: "확인해보세요!",
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
