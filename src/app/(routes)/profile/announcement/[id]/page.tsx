"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/organisms/Header";
import { getAnnounceDetail } from "@/api/profile/getAnnounces";

export default function AnnouncementDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["announcement", id],
    queryFn: () => getAnnounceDetail(id),
    enabled: !isNaN(id),
    refetchOnMount: true,
  });

  if (isNaN(id)) {
    return <p className="p-4">잘못된 접근입니다.</p>;
  }

  if (isLoading) {
    return <p className="py-6 text-center">로딩 중...</p>;
  }

  if (isError || !data) {
    return <p className="p-4">공지사항을 찾을 수 없습니다.</p>;
  }

  const { title, content } = data;

  return (
    <div>
      <Header title="공지사항" backButton />

      <div className="flex flex-col gap-4 p-4">
        <div className="border-grey-200 flex flex-col gap-1 border-b pb-4">
          <h2 className="text-body1-bold font-gsans-bold text-grey-950">
            {title}
          </h2>
        </div>
        <p className="text-body2-medium font-gsans-medium text-grey-950 whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}
