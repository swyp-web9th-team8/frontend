import { format, formatDistanceToNow, parseISO } from "date-fns";
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

/**
 * Converts Korean local time string to UTC ISO string with 'Z' timezone
 * @param koreanTime - Korean time string (e.g., "5월 17일(토) 오전 9:06")
 * @returns {string} ISO string in UTC with 'Z' timezone
 */
export const convertKoreanTimeToUTC = (koreanTime: string): string => {
  // Parse Korean time format
  const timeMatch = koreanTime.match(
    /(\d+)월\s*(\d+)일.*(오전|오후)\s*(\d+):(\d+)/,
  );

  if (!timeMatch) {
    throw new Error("Invalid Korean time format");
  }

  const [, month, day, amPm, hours, minutes] = timeMatch;
  console.log(day);
  let hour = parseInt(hours);

  // Convert to 24-hour format
  if (amPm === "오후" && hour !== 12) {
    hour += 12;
  } else if (amPm === "오전" && hour === 12) {
    hour = 0;
  }

  // Create date object in KST
  const now = new Date();
  const kstDate = new Date(
    now.getFullYear(),
    parseInt(month) - 1, // month is 0-based
    parseInt(day),
    hour,
    parseInt(minutes),
  );

  // Convert to UTC by subtracting 9 hours
  const utcDate = new Date(kstDate.getTime() - 9 * 60 * 60 * 1000);

  return utcDate.toISOString();
};
