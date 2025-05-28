import { messaging } from "@/lib/firebase.config";
import { getToken } from "firebase/messaging";

// 사용자의 푸시 알림 권한 요청
export const handleNotificationPermission = async () => {
  try {
    // 웹 브라우저에서 제공하는 내장 API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("알림 권한이 허용되었습니다.");
      registerServiceWorker(); // 서비스 워커 실행
      await getDeviceToken();
    } else if (permission === "denied") {
      alert("알림을 허용해주세요");
    } else {
      alert("사용자가 알림 권한을 결정하지 않았습니다.");
    }
  } catch {
    alert("푸시 알림 권한 요청 중 오류가 발생했습니다.");
  }
};

export const getDeviceToken = async () => {
  if (!messaging) return null;

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    // 토큰을 서버로 전송하거나 UI 업데이트
    console.log("푸시 토큰", token);
    return token;
  } catch (error) {
    console.error("푸시 토큰 가져오는 중 오류가 발생했습니다", error);
    return null;
  }
};

// 서비스 워커 실행 함수
function registerServiceWorker() {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then(function (registration) {
      alert(`Service Worker 등록 성공:, ${registration}`);
    })
    .catch(function (error) {
      alert(`Service Worker 등록 실패:, ${error}`);
    });
}
