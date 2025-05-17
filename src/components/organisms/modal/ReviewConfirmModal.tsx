import TwoButtonContents from "@/components/atoms/Modal/contents/TwoButtonContents";
import Modal from "@/components/atoms/Modal/Modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReConfirm from "./ReConfirm";

interface Props {
  reviewOpen: boolean;
  reviewId: string;
}

export default function ReviewConfirmModal({ reviewOpen, reviewId }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(reviewOpen);

  useEffect(() => {
    setIsOpen(reviewOpen);
  }, [reviewOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    router.push(`/review/create?id=${reviewId}`);
  };

  return (
    <div className="review-modal">
      {isOpen && (
        <Modal onClose={handleClose} position="center">
          <TwoButtonContents
            onClose={handleClose}
            onConfirm={handleConfirm}
            buttonText={{ close: "나중에 하기", confirm: "지금하기" }}
          >
            <ReConfirm
              title="주최하신 모임의 리뷰를 남겨주세요"
              description="리뷰를 제출하셔야 점수를 획득하실 수 있어요!"
              showDate={"4월 3일 토요일"}
              showIcon
            />
          </TwoButtonContents>
        </Modal>
      )}
    </div>
  );
}
