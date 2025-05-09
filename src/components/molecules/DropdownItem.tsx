import IconCheck01 from "@/assets/icons/IconCheck01.svg";
import IconCheck01Active from "@/assets/icons/IconCheck01Active.svg";

type DropdownItemType = "selectable" | "action";

interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  type?: DropdownItemType;
}

function DropdownItem({
  children,
  isActive = false,
  onClick,
  type = "selectable",
}: Props) {
  return (
    <div
      className={`text-grey-950 font-gsans-medium text-body1-medium flex cursor-pointer items-center gap-1.5 px-1 ${
        type === "action" ? "border-t border-gray-200 pt-4" : ""
      }`}
      onClick={onClick}
    >
      {type === "selectable" &&
        (isActive ? (
          <IconCheck01Active className="h-5 w-5" />
        ) : (
          <IconCheck01 className="h-5 w-5" color="#B0B0B0" />
        ))}
      {children}
    </div>
  );
}

export default DropdownItem;
