import { getRandomAvatar } from "@/utils/images";
import Image from "next/image";

interface Props {
    src: string | undefined;
    size?: number;
    className?: string;
}

export default function ProfileImage({ src, size = 28, className = "" }: Props) {
    return (
        <Image
            src={src || getRandomAvatar("female")}
            alt="profile"
            width={size}
            height={size}
            className={`rounded-full ${className}`}
        />
    );
}
