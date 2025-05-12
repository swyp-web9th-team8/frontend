interface BadgeProgressBarProps {
  label: string;
  current: number;
  total: number;
  isFull?: boolean;
}

export default function BadgeProgressBar({
  label,
  current,
  total,
  isFull = false,
}: BadgeProgressBarProps) {
  const totalBlocks = 10;
  const safeCurrent = Math.min(current, total);

  const filledBlocks = isFull ? 10 : safeCurrent % 10;

  return (
    <div className="border-grey-200 flex flex-col gap-2.5 rounded-2xl border px-3 py-5">
      <div className="text-grey-950 flex justify-between text-sm font-medium">
        <span className="text-grey-950 font-gsans-medium text-body2-medium">
          {label}
        </span>
        <span className="text-grey-400 font-gsans-medium text-body2-medium">
          {safeCurrent}/{total}
        </span>
      </div>

      <div className="flex gap-0.5">
        {Array.from({ length: totalBlocks }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-xs ${
              idx < filledBlocks ? "bg-green" : "bg-grey-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
