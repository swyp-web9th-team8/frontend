import Tooltip from "@/components/atoms/Tooltip/Tooltip";

interface Props {
  label: string;
  name: string;
  children: React.ReactNode;
  tooltip?: string;
}
export default function InputWithLabel({
  label,
  name,
  children,
  tooltip,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-body1-medium font-gsans-medium flex items-center gap-1 text-[#1A1A1A]"
        htmlFor={name}
      >
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      {children}
    </div>
  );
}
