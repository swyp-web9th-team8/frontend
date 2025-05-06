interface Props {
  unit: string;
  children: React.ReactNode;
}

function InputWithUnit({ unit, children }: Props) {
  return (
    <div className="text-body1-medium font-gsans-medium flex items-center gap-1.5 text-gray-950">
      {children}
      <span>{unit}</span>
    </div>
  );
}

export default InputWithUnit;
