import NotificationSettings from "@/components/templates/NotificationSettings";

function NotificationSettingsPage() {
  const settings = [
    {
      title: "신규 모임",
      description: "내 거주지역에 새로 생긴 모임 알림",
      isChecked: true,
    },
    {
      title: "신규 참가자",
      description: "내가 만든 모임의 신규 참가 신청 알림",
      isChecked: false,
    },
  ];

  return <NotificationSettings settings={settings} />;
}

export default NotificationSettingsPage;
