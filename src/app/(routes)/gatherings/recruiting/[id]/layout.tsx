import RecruitingDetailHeader from "@/components/organisms/header/RecruitingDetailHeader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-gsans-medium">
      <RecruitingDetailHeader />
      <div className="px-5 pt-[34px]">{children}</div>
    </div>
  );
}

export default Layout;
