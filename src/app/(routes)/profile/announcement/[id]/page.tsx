"use client";

import { useParams } from "next/navigation";
import Header from "@/components/organisms/Header";
import { ANNOUNCEMENTS } from "@/data/announcements";

export default function AnnouncementDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const announcement = ANNOUNCEMENTS.find((a) => a.id === id);

  if (!announcement) return <p className="p-4">공지사항을 찾을 수 없습니다.</p>;

  return (
    <div>
      <Header title="공지사항" backButton />

      <div className="flex flex-col gap-4">
        <div className="border-grey-200 flex flex-col gap-1 border-b py-4">
          <span className="text-body2-medium font-gsans-medium text-grey-400">
            {announcement.date}
          </span>
          <h2 className="text-body1-bold font-gsans-bold text-grey-950">
            {announcement.title}
          </h2>
        </div>
        <p className="text-body2-medium font-gsans-medium text-grey-950 whitespace-pre-line">
          {announcement.content}
        </p>
      </div>
    </div>
  );
}
