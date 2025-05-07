export const HOURS = Array.from({ length: 12 }, (_, i) => i.toString());

export const MINITUES = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0"),
);

export const AMPM = ["AM", "PM"];

export const DUE_TIME_OPTIONS = [
  "모임 시작 30분 전",
  "모임 시작 1시간 전",
  "신청 마감 없음",
];
