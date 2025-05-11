"use client";

import Link from "next/link";
import Header from "@/components/organisms/Header";
import IconChevronRight from "@/assets/icons/IconChevronRight.svg";
import { ANNOUNCEMENTS } from "@/data/announcements";

export default function AnnouncementPage() {
  return (
    <div>
      <Header title="공지사항" backButton />
      <ul className="flex flex-col">
        {ANNOUNCEMENTS.map((item) => (
          <li
            key={item.id}
            className="border-grey-200 border-b last:border-b-0"
          >
            <Link
              href={`/profile/announcement/${item.id}`}
              className="flex items-center justify-between py-3.5"
            >
              <div className="flex flex-col gap-1">
                <span className="text-body3-medium text-grey-400">
                  {item.date}
                </span>
                <p className="text-body2-medium font-gsans-medium text-grey-950">
                  {item.title}
                </p>
              </div>
              <IconChevronRight className="text-grey-400 h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
