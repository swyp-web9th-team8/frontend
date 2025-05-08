import IconCheck01 from "@/assets/icons/IconCheck01.svg";
import IconCheck01Active from "@/assets/icons/IconCheck01Active.svg";
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage";

interface Props {
  id: number;
  name: string;
  isChecked: boolean;
  imageUrl: string | undefined;
  onCheck: (id: number) => void;
}

function AttendanceItem({ id, name, isChecked, imageUrl, onCheck }: Props) {
  return (
    <div
      className="flex items-center justify-between gap-1.5"
      onClick={() => onCheck(id)}
    >
      <ProfileImage src={imageUrl} size={48} />
      <div className="text-body1-medium flex-1 text-gray-950">{name}</div>
      <button type="button">
        {isChecked ? (
          <IconCheck01Active className="h-6 w-6 text-gray-200" />
        ) : (
          <IconCheck01 className="h-6 w-6 text-gray-200" />
        )}
      </button>
    </div>
  );
}

export default AttendanceItem;
