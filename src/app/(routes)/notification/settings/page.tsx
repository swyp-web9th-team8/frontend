import NotificationSettings from "@/components/templates/NotificationSettings";

function NotificationSettingsPage() {
  // TODO: 백엔드 알림 로직 완료 후 주석 해제
  const settings = [
    // {
    //   title: "신규 모임",
    //   description: "내 거주지역에 새로 생긴 모임 알림",
    //   isChecked: true,
    // },
    // {
    //   title: "신규 참가자",
    //   description: "내가 만든 모임의 신규 참가 신청 알림",
    //   isChecked: false,
    // },
    {
      title: "리뷰 요청 알림",
      description: "모임이 종료되어 모임 생성자에게 리뷰 작성을 요청",
      isChecked: false,
    },
  ];

  return <NotificationSettings settings={settings} />;
}

export default NotificationSettingsPage;
