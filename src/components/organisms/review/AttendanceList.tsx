import AttendanceItem from "@/components/molecules/review/AttendanceItem";
import { IParticipant } from "@/types/gatherings";

interface Props {
  attendance: number[];
  onCheck: (id: number) => void;
  allMembers: IParticipant[];
}

function AttendanceList({ attendance, onCheck, allMembers }: Props) {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-heading2-medium text-gray-950">출석체크 해주세요</p>
      <div className="flex flex-col gap-4.5">
        {allMembers.map((item) => (
          <AttendanceItem
            key={item.id}
            name={item.nickname}
            isChecked={attendance.includes(item.id)}
            imageUrl={item.profileImage ?? undefined}
            onCheck={onCheck}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default AttendanceList;
