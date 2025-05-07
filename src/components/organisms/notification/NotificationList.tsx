import NotificationItem from "@/components/molecules/notification/NotificationItem";
import { INotificationItem } from "@/types/notification";

interface Props {
  notifications: INotificationItem[];
}
function NotificationList({ notifications }: Props) {
  return (
    <div className="flex flex-col">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
}

export default NotificationList;
