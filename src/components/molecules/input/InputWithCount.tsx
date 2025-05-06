import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  maxLength?: number;
  children: React.ReactNode;
}
function InputWithCount({ name, maxLength = 150, children }: Props) {
  const { watch } = useFormContext();

  const contents = (watch(name) as string) || "";

  return (
    <div className="flex flex-col gap-2">
      {children}
      <p className="text-body3-medium text-grey-600 text-grey-300 flex justify-end">
        {contents.length || 0}/{maxLength}
      </p>
    </div>
  );
}

export default InputWithCount;
