export const HOURS = Array.from({ length: 12 }, (_, i) => i.toString());

export const MINITUES = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0"),
);

export const AMPM = ["AM", "PM"];

export type DUE_TIME = 30 | 60 | undefined;

export const DUE_TIME_OPTIONS = [
  { screen: "모임 시작 30분 전", request: 30 },
  { screen: "모임 시작 1시간 전", request: 60 },
];
