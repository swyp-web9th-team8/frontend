function CompletedGatheringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="bottom-padding flex-1">{children}</div>
    </div>
  );
}

export default CompletedGatheringLayout;
