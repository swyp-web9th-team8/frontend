import Nav from "@/components/organisms/Nav";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="bottom-padding flex flex-1 flex-col">{children}</div>
      <Nav />
    </div>
  );
}

export default HomeLayout;
