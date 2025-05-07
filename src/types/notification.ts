export type notificationType = "신규 모임" | "내가 만든 모임";

export interface INotificationItem {
  id: number;
  title: notificationType;
  contents: string;
  time: string;
}
