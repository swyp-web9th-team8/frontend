interface Props {
  label: string;
  name: string;
  children: React.ReactNode;
}
export default function InputWithLabel({ label, name, children }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label
        className="text-body1-medium font-gsans-medium text-[#1A1A1A]"
        htmlFor={name}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
