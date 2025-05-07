"use client";

import NotificationList from "@/components/organisms/notification/NotificationList";
import { notifications } from "@/data/notification";
import Empty from "../organisms/Empty";

function Notification() {
  return (
    <div className="h-full">
      {notifications.length === 0 ? (
        <Empty
          largeText="검색 결과가 없어요"
          smallText="다른 키워드로 검색해보세요!"
        />
      ) : (
        <NotificationList notifications={notifications} />
      )}
    </div>
  );
}

export default Notification;
