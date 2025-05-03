import Image from "next/image";

export default function GatheringImage() {
  return (
    <Image
      src="https://placehold.co/600x400"
      alt="Image 1"
      width={0}
      height={0}
      className="h-[208px] w-[95%] rounded-lg object-cover"
    />
  );
}
