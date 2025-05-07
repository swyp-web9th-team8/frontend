import IconCheck01 from "@/assets/icons/IconCheck01.svg";
import IconCheck01Active from "@/assets/icons/IconCheck01Active.svg";

interface Props {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function DropdownItem({ children, isActive, onClick }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-1.5" onClick={onClick}>
      {isActive ? (
        <IconCheck01Active className="h-5 w-5" />
      ) : (
        <IconCheck01 className="h-5 w-5" color="#B0B0B0" />
      )}
      {children}
    </div>
  );
}

export default DropdownItem;
