import RecruitingDetailHeader from "@/components/organisms/header/RecruitingDetailHeader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-gsans-medium flex h-full flex-col">
      <RecruitingDetailHeader />
      <div className="flex flex-1 flex-col pt-[34px]">{children}</div>
    </div>
  );
}

export default Layout;
