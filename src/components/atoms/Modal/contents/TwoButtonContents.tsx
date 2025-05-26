import ModalButton from "@/components/atoms/Button/ModalButton";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  buttonText: {
    close: string;
    confirm: string;
  };
}

function TwoButtonContents({
  onClose,
  onConfirm,
  buttonText,
  children,
}: Props) {
  return (
    <div className="mt-17 mb-8 flex w-full flex-col justify-between gap-9 px-4">
      <div className="w-full">{children}</div>
      <div className="flex gap-3">
        <ModalButton onClick={onClose} buttonType="close">
          {buttonText.close}
        </ModalButton>
        <ModalButton onClick={onConfirm} buttonType="confirm">
          {buttonText.confirm}
        </ModalButton>
      </div>
    </div>
  );
}

export default TwoButtonContents;
