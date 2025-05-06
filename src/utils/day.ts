import { format, parseISO } from "date-fns";
import { ko } from "react-day-picker/locale";

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

export const formatDateKorean = (date: Date) => {
  return format(date, "M월 dd일(E)", { locale: ko });
};

// "1:30:PM" → "오후 1:30" 형태로 변환하는 함수
export const convertTimeFormat = (timeStr: string): string => {
  const [h, m, amPm] = timeStr.split(":");
  return `${amPm === "PM" ? "오후" : "오전"} ${h}:${m.padStart(2, "0")}`;
};
