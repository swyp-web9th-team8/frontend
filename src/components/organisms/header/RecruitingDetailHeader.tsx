"use client";

import IconChevronLeft from "@/assets/icons/IconChevronLeft.svg";
import ShareButton, {
  IShareButton,
} from "@/components/atoms/Button/ShareButton";
import { useParams, usePathname, useRouter } from "next/navigation";

interface Props {
  children: string;
  sharedButton: IShareButton;
}

function RecruitingDetailHeader({ children, sharedButton }: Props) {
  const router = useRouter();
  const { id } = useParams();
  const pathname = usePathname();

  const getShareHref = () => {
    if (pathname.endsWith("/ranking")) {
      return sharedButton.href;
    }
    return `${sharedButton.href}/${id}`;
  };

  return (
    <header className="font-gsans-medium bg-green relative -mx-5 flex items-center justify-center pt-[29px] pb-[14px] text-xl leading-normal font-medium">
      <div className="absolute left-3">
        <IconChevronLeft
          className="h-8 w-8 cursor-pointer text-gray-950"
          onClick={() => router.back()}
        />
      </div>
      {/* 가운데 타이틀 */}
      <div className="text-body1-medium">{children}</div>
      <div className="absolute right-5 cursor-pointer">
        <ShareButton
          title={sharedButton.title}
          text={sharedButton.text}
          href={getShareHref()}
        />
      </div>
    </header>
  );
}

export default RecruitingDetailHeader;
