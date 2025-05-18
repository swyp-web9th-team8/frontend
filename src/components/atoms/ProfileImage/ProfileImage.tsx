import { getRandomAvatar } from "@/utils/images";
import Image from "next/image";

interface Props {
  src: string | undefined | null;
  size?: number;
}

export default function ProfileImage({ src, size = 28 }: Props) {
  return (
    <Image
      src={src || getRandomAvatar("female")}
      alt="profile"
      width={size}
      height={size}
      className={`rounded-full object-cover`}
    />
  );
}
