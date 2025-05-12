interface BadgeCardItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  required: number;
  isAcquired: boolean;
}

export default function BadgeCardItem({
  icon: Icon,
  label,
  required,
  isAcquired,
}: BadgeCardItemProps) {
  return (
    <li className={`flex items-center gap-5 ${isAcquired ? "" : "opacity-30"}`}>
      <Icon className="h-[3.625rem] w-[4rem]" />
      <div className="flex flex-col">
        <span className="text-grey-950 font-gsans-bold text-body2-bold">
          {label}
        </span>
        <span className="text-grey-950 text-body3-medium font-gsans-medium">
          줍깅이 활동 {required}회 (누적)
        </span>
      </div>
    </li>
  );
}
