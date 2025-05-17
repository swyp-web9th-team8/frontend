import Nav from "@/components/organisms/Nav";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="bottom-padding flex-1">{children}</div>
      <Nav />
    </div>
  );
}

export default HomeLayout;
