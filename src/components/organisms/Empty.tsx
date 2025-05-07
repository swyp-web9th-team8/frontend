import Character from "@/assets/images/Character.svg";

interface Props {
  largeText: string;
  smallText?: string;
}
function Empty({ largeText, smallText }: Props) {
  return (
    <div className="absolute top-1/2 left-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      <Character className="h-[118px] w-[118px]" />
      <p className="justify-start self-stretch text-center text-xl leading-normal font-bold text-gray-950">
        {largeText}
      </p>
      {smallText && (
        <p className="text-greyscale-gray-950 justify-start self-stretch text-center text-base leading-normal font-medium">
          {smallText}
        </p>
      )}
    </div>
  );
}

export default Empty;
