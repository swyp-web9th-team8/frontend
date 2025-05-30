import { messaging } from "@/lib/firebase.config";
import { getToken } from "firebase/messaging";

// 사용자의 푸시 알림 권한 요청
export const handleNotificationPermission = async () => {
  try {
    // 웹 브라우저에서 제공하는 내장 API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      registerServiceWorker(); // 서비스 워커 실행
    } else if (permission === "denied") {
      throw new Error("알림을 허용해주세요");
    } else {
      throw new Error("알림 권한을 설정해주세요");
    }
  } catch (error) {
    throw error;
  }
};

export const getDeviceToken = async () => {
  if (!messaging) return null;

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    if (!token) {
      throw new Error("토큰을 가져오지 못했습니다");
    }

    return token;
  } catch (error) {
    throw error;
  }
};

// 서비스 워커 실행 함수
function registerServiceWorker() {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then(function (registration) {
      console.log(`Service Worker 등록 성공:, ${registration}`);
    })
    .catch(function (error) {
      console.log(`Service Worker 등록 실패:, ${error}`);
    });
}
