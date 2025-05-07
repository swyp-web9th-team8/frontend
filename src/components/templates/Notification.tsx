"use client";

import NotificationList from "@/components/organisms/notification/NotificationList";
import { notifications } from "@/data/notification";

function Notification() {
  return (
    <div className="h-full">
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default Notification;
