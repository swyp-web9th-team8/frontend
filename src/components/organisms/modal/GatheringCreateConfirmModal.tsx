import CharacterSmiling from "@/assets/images/CharacterSmiling.svg";
import TwoButtonContents from "@/components/atoms/Modal/contents/TwoButtonContents";
import Modal from "@/components/atoms/Modal/Modal";
import { formatDateAndTime } from "@/utils/day";
import { useRouter } from "next/navigation";

interface Props {
  meetingTime: string;
}

function GatheringCreateConfirmModal({ meetingTime }: Props) {
  const date = formatDateAndTime(meetingTime, "M월 d일 E") + "요일";
  const router = useRouter();
  return (
    <Modal
      onClose={() => router.push("/home")}
      position="center"
      variant="plain"
    >
      <TwoButtonContents
        buttonText={{
          close: "모임 확인하기",
          confirm: "닫기",
        }}
        onClose={() => router.push("/home")}
        onConfirm={() => router.push("/home")}
      >
        <div className="inline-flex w-full flex-col items-center justify-center gap-[22px]">
          <CharacterSmiling className="h-[114px] w-[114px]" />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-heading1-bold justify-center self-stretch text-center text-gray-950">
              모임이 생성됐어요
            </div>
            <div className="text-body3-medium inline-flex items-center justify-start gap-1.5 text-gray-400">
              <div className="">{date}</div>
            </div>
          </div>
        </div>
      </TwoButtonContents>
    </Modal>
  );
}

export default GatheringCreateConfirmModal;
