import Avatar from "@/assets/icons/avatar.svg";
import Image from "next/image";
import { useState } from "react";

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
        <Avatar
          className="rounded-full"
          style={{ width: size, height: size }}
        />
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
        sizes={`${size}px`}
        onError={() => setImageError(true)}
      />
    </div>
  );
}
