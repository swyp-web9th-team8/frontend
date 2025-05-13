import InputWithModal from "@/components/molecules/input/InputWithModal";
import AttendanceList from "@/components/organisms/review/AttendanceList";
import { IReviewCreateResponse } from "@/types/review";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  allMembers: IReviewCreateResponse["allMembers"];
}

function AttendanceManager({ name, allMembers }: Props) {
  const { setValue } = useFormContext();
  const [attendanceIds, setAttendanceIds] = useState<number[]>([]);

  const handleCheckbox = (userId: number) => {
    setAttendanceIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const handleModalConfirm = () => {
    const attendance = allMembers
      .filter((member) => attendanceIds.includes(member.id))
      .map((member) => member.nickname);

    setValue(name, attendance.join(", "));
  };

  return (
    <InputWithModal
      name={name}
      onConfirm={handleModalConfirm}
      placeholder="참여한 사람들을 체크해주세요"
    >
      <AttendanceList
        attendance={attendanceIds}
        onCheck={handleCheckbox}
        allMembers={allMembers}
      />
    </InputWithModal>
  );
}

export default AttendanceManager;
