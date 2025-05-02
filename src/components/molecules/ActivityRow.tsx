import IconChevronRight from "@/assets/icons/IconChevronRight.svg";

export default function ActivityRow({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between pb-[1.375rem] last:pb-0">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-body2-medium font-gsans-medium text-grey-950">
          {label}
        </span>
      </div>
      <div className="text-body3-medium font-gsans-medium text-grey-400 flex items-center gap-0.5">
        {value && <span>{value}</span>}
        <IconChevronRight className="h-6 w-6" />
      </div>
    </div>
  );
}
