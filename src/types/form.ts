export interface IGatheringFormValues {
  title: string;
  contents: string;
  maxParticipants: number;
  calendarDate: string;
  dueTime: string;
  startTime: string; // "14:00"
  kakaoLink: string | null;
}
