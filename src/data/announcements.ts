export interface Announcement {
  id: number;
  date: string;
  title: string;
  content: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    date: "2025.3.30",
    title: "서비스 지역 안내",
    content: `안녕하세요 플로거 여러분,

현재 저희 서비스는 서울에서만 제공되고 있습니다.
플로깅 열풍 덕분에 점점 더 많은 서비스에서 이를 가능하게 하여 운영에 힘쓰고 있습니다.

사용자 여러분의 관심과 응원에 힘입어 더욱 다양한 지역으로 확장할 예정이며,
이용에 많은 관심 부탁드립니다.`,
  },
  {
    id: 2,
    date: "2025.3.28",
    title: "서비스 개시 안내",
    content: `플로깅 앱 ‘플로고’가 오픈하였습니다!
지금 바로 동네에서 줍깅을 시작해보세요!`,
  },
];
