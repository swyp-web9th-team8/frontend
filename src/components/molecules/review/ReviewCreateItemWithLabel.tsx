interface Props {
  label: string;
  children: React.ReactNode;
}

function ReviewCreateItemWithLabel({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body1-bold justify-start text-base text-gray-950">
        {label}
      </p>
      {children}
    </div>
  );
}

export default ReviewCreateItemWithLabel;
