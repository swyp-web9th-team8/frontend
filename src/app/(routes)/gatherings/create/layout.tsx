import Header from "@/components/organisms/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Header title="모임 만들기" backButton />
      {children}
    </div>
  );
}

export default Layout;
