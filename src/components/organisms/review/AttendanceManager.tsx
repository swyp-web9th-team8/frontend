import InputWithModal from "@/components/molecules/input/InputWithModal";
import AttendanceList from "@/components/organisms/review/AttendanceList";
import { ATTENDANCE_LIST } from "@/data/attendence";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
}

type AttendanceState = Record<number, boolean>;

function AttendanceManager({ name }: Props) {
  const { setValue } = useFormContext();
  const [attendance, setAttendance] = useState<AttendanceState>({});

  const handleCheckbox = (id: number) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getSelectedAttendanceNames = (
    attendanceState: AttendanceState,
  ): string[] => {
    return Object.entries(attendanceState)
      .filter(([, isChecked]) => isChecked)
      .map(([id]) => {
        const attendance = ATTENDANCE_LIST.find(
          (item) => item.id === Number(id),
        );
        return attendance?.name ?? "";
      })
      .filter(Boolean);
  };

  const handleModalConfirm = () => {
    const selectedNames = getSelectedAttendanceNames(attendance);
    setValue(name, selectedNames.join(", "));
  };

  return (
    <InputWithModal
      name={name}
      onConfirm={handleModalConfirm}
      placeholder="참여한 사람들을 체크해주세요"
    >
      <AttendanceList attendance={attendance} onCheck={handleCheckbox} />
    </InputWithModal>
  );
}

export default AttendanceManager;
