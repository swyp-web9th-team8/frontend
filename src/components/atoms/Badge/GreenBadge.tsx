interface Props {
  children: string;
  fontSize?: "body3" | "body4";
}

export default function GreenBadge({ children, fontSize = "body3" }: Props) {
  const fontClass = {
    body3: "text-body3-medium",
    body4: "text-body4-medium",
  };

  return (
    <div className="bg-green inline-flex w-fit flex-col items-center justify-center gap-2 rounded-[100px] px-3 py-[6px]">
      <div
        className={`text-grey-0 ${fontClass[fontSize]} justify-start text-center`}
      >
        {children}
      </div>
    </div>
  );
}
