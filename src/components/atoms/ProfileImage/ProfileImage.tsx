import Image from "next/image";
import { useState } from "react";
import Avatar from "@/assets/icons/avatar.svg";

interface Props {
  src: string | undefined | null;
  size?: number;
}

export default function ProfileImage({ src, size = 28 }: Props) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className="relative overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <Avatar className="h-7 w-7 rounded-full" />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="profile"
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
