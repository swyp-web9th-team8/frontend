import { format, formatDistanceToNow, parseISO } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { ko } from "date-fns/locale";

export const getAbbreviatedMonth = (month: number) => {
  const monthMap = {
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
  };

  return monthMap[month as keyof typeof monthMap];
};

export const getAbbreviatedDayOfWeek = (dayOfWeek: string) => {
  const dayOfWeekMap = {
    Mon: "월",
    Tue: "화",
    Wed: "수",
    Thu: "목",
    Fri: "금",
    Sat: "토",
    Sun: "일",
  };

  return dayOfWeekMap[dayOfWeek as keyof typeof dayOfWeekMap];
};

export const formatDate = (date: string, formatString?: string) => {
  const d = parseISO(date);
  return format(d, formatString || "yyyy-MM-dd");
};

export const getDayOfWeek = (date: string) => {
  const d = parseISO(date);
  return format(d, "E");
};

export const getMonth = (date: string) => {
  const d = parseISO(date);
  return Number(format(d, "MM"));
};

export const getDay = (date: string) => {
  const d = parseISO(date);
  return Number(format(d, "dd"));
};

/** 몇일 전 */
// TODO: "약 몇시간 전 -> 몇시간 전" 으로 커스텀
export const getDiffTime = (date: string) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    // 1분 미만
    return "방금 전";
  }
  if (diff < 60 * 60 * 24 * 3) {
    // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, "PPP (E)", { locale: ko });
};

export const formatDateKorean = (date: Date) => {
  return format(date, "M월 dd일(E)", { locale: ko });
};

export const convertTimeFormat = (timeStr: string): string => {
  const [h, m, amPm] = timeStr.split(":");
  return `${amPm === "PM" ? "오후" : "오전"} ${h}:${m.padStart(2, "0")}`;
};

// yyyy년 M월 d일
// H시 m분
export const formatDateAndTime = (
  date: string,
  formatString = "yyyy년 M월 d일 H시 m분",
): string => {
  const d = parseISO(date);
  return format(d, formatString, { locale: ko });
};

//TODO: 리팩토링
export const convertKoreanTimeToUTC = (
  datePart: string,
  timePart: string,
): string => {
  try {
    // 요일 제거: "5월 23일(금)" -> "5월 23일"
    // '5월 23일(금)' → 월: 5, 일: 23
    const monthMatch = datePart.match(/(\d+)월/);
    const dayMatch = datePart.match(/(\d+)일/);

    if (!monthMatch || !dayMatch) {
      throw new Error("날짜 형식이 잘못되었습니다.");
    }

    const month = parseInt(monthMatch[1], 10);
    const day = parseInt(dayMatch[1], 10);

    const year = new Date().getFullYear();

    // '오전 0:00' → 오전/오후 + 시:분 분리
    const [amPm, time] = timePart.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let hour = hours;

    if (amPm === "오후" && hour !== 12) {
      hour += 12;
    } else if (amPm === "오전" && hour === 12) {
      hour = 0;
    }

    // "YYYY-MM-DD HH:mm" 문자열 만들기
    const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    const d = new Date(dateStr);
    const utcDate = toZonedTime(d, "Asia/Seoul");

    const isoWithoutMillis = utcDate.toISOString().split(".")[0];
    return isoWithoutMillis;

    // 원하는 형식 출력
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`시간 변환 중 오류가 발생했습니다: ${error.message}`);
    }
    throw error;
  }
};
