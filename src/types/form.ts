export interface IGatheringFormValues {
  title: string;
  content: string;
  maxParticipants: number;
  datePart: string;
  address: string;
  deadLine: string;
  timePart: string; // "14:00"
  openChatUrl: string | null;
}

export interface ICreateFormValues {
  images: File[];
  userIds: number[]; // 닉네임
}
