import { getRandomAvatar } from "@/utils/images";
import ProfileImage from "./ProfileImage";

interface Props {
    src: string[];
    maxCount?: number; // 최대 표시 인원
    size?: number; // 프로필 이미지 크기
}

export default function ProfileImages({ src: profiles, maxCount = 2, size = 28 }: Props) {
    const profileArray = Array.isArray(profiles) ? profiles : [profiles];
    const containerWidth = maxCount > 1 ? size + (size * 0.5 * (maxCount - 1)) : size;

    return (
        <div className="flex flex-row" style={{ width: `${containerWidth}px`, height: `${size}px` }}>{
            Array.from({ length: maxCount }).map((_, index) => (
                <div key={index} style={{ transform: `translateX(${index * size * 0.5}px)` }} className="absolute">
                    <ProfileImage
                        src={profileArray[index] || getRandomAvatar("female")}
                        size={size}
                    />
                </div>

            ))}
        </div>
    );
}
