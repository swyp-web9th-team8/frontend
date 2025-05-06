const OverlayView = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 grid grid-rows-[1fr,auto,1fr]">
      {/* 상단 오버레이 */}
      <div />
      {/* 중앙 투명 영역 */}
      <div className="rounded-lg bg-zinc-500/10" />
      {/* 하단 오버레이 */}
      <div />
    </div>
  );
};

export default OverlayView;
