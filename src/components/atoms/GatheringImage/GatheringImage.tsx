import Image from "next/image";

interface Props {
  src: string;
}

export default function GatheringImage({ src }: Props) {
  const imageUrl = src
    ? process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${src}`
      : `http://localhost:8080${src}`
    : "/images/default-gathering.png";

  return (
    <div className="h-[208px] w-full rounded-lg">
      <Image
        src={imageUrl}
        alt="Image 1"
        sizes="100vw"
        width={0}
        height={0}
        className="h-[208px] w-[95%] rounded-lg object-cover"
      />
    </div>
  );
}
