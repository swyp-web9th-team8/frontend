import Character from "@/assets/images/Character.svg";

interface Props {
  largeText: string;
  smallText?: string;
  children?: React.ReactNode;
}
function Empty({ largeText, smallText, children }: Props) {
  return (
    <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      <Character className="mb-11 h-[118px] w-[118px]" />
      <p className="mb-4 justify-start self-stretch text-center text-xl leading-normal font-bold text-gray-950">
        {largeText}
      </p>
      {smallText && (
        <p className="text-greyscale-gray-950 mb-9 justify-start self-stretch text-center text-base leading-normal font-medium">
          {smallText}
        </p>
      )}
      {children}
    </div>
  );
}

export default Empty;
