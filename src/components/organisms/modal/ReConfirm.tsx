import IconExclamationGreen from "@/assets/icons/IconExclamationGreen.svg";

interface Props {
  showIcon?: boolean;
  title: string;
  description?: string;
  showDate?: string;
}

function ReConfirm({ showIcon = true, title, description, showDate }: Props) {
  return (
    <div className="font-gsans-medium flex flex-col items-center justify-center">
      {showIcon && (
        <IconExclamationGreen className="text-green mb-2 h-14 w-14" />
      )}
      {showDate && (
        <p className="text-body3-medium text-grey-400 mb-5">{showDate}</p>
      )}
      <p className="text-heading1-bold mb-[14px] text-gray-950">{title}</p>
      {description && (
        <p className="text-body2-medium text-gray-400">{description}</p>
      )}
    </div>
  );
}

export default ReConfirm;
