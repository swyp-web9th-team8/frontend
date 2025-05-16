export interface IGatheringFormValues {
  title: string;
  content: string;
  maxParticipants: number;
  datePart: string;
  address: string;
  dueTime: string;
  timePart: string; // "14:00"
  openChatUrl: string | null;
}

export interface ICreateFormValues {
  images: File[];
  attendance: number[]; // 닉네임
}
