"use client";

import GatheringIcon from "@/assets/icons/group02.svg";
import HomeIcon from "@/assets/icons/home.svg";
import RankingIcon from "@/assets/icons/medal02.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconStyle = "w-7 h-7";

const NAV_ITEMS = [
  {
    label: "홈",
    icon: <HomeIcon className={iconStyle} />,
    href: `/home`,
  },
  {
    label: "모임",
    icon: <GatheringIcon className={iconStyle} />,
    href: `/gatherings/completed`,
  },
  {
    label: "랭킹",
    icon: <RankingIcon className={iconStyle} />,
    href: `/ranking`,
  },
  {
    label: "프로필",
    icon: <ProfileIcon className={iconStyle} />,
    href: `/profile`,
  },
];

const NAV_ITEM_STYLE = {
  default: {
    text: "text-grey-400",
    icon: "text-green-950",
  },
  active: {
    text: "text-green",
    icon: "text-green",
  },
};

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="shadow-[0px_4px_24px_0px_rgba(170,170,170,0.30)]justify-center fixed bottom-0 -ml-5 flex w-full max-w-[500px] items-end bg-white px-10 pt-2.5 pb-5">
      {NAV_ITEMS.map((item, index) => {
        const isActive =
          item.href === "/home"
            ? pathname === "/home"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 ${isActive ? NAV_ITEM_STYLE.active.icon : NAV_ITEM_STYLE.default.icon}`}
          >
            {item.icon}
            <div
              className={`text-body3-medium ${isActive ? NAV_ITEM_STYLE.active.text : NAV_ITEM_STYLE.default.text}`}
            >
              {item.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
