import AttendanceItem from "@/components/molecules/review/AttendanceItem";
import { ATTENDANCE_LIST } from "@/data/attendence";

interface Props {
  attendance: Record<number, boolean>;
  onCheck: (id: number) => void;
}

function AttendanceList({ attendance, onCheck }: Props) {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-heading2-medium text-gray-950">출석체크 해주세요</p>
      <div className="flex flex-col gap-4.5">
        {ATTENDANCE_LIST.map((item) => (
          <AttendanceItem
            key={item.id}
            name={item.name}
            isChecked={attendance[item.id]}
            imageUrl={item.imageUrl}
            onCheck={onCheck}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default AttendanceList;
