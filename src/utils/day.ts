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
