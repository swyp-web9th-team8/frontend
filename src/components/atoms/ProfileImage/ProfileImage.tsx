import { getRandomAvatar } from "@/utils/images";
import Image from "next/image";

interface Props {
  src: string | undefined | null;
  size?: number;
}

export default function ProfileImage({ src, size = 28 }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src={src || getRandomAvatar("female")}
        alt="profile"
        fill
        className="object-cover"
      />
    </div>
  );
}
