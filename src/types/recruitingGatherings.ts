export interface IRecrutingGatherings {
  title: string;
  content: string;
  placeId: number; //
  placeName: string;
  address: string;
  meetingTime: string;
  openChatUrl: string | null;
  writer: IParticipant;
  maxParticipants: number;
  deadLine: string;
  participants: IParticipants;
}

export interface IParticipant {
  nickname: string;
  profileImageUrl: string | null;
}

export type IParticipants = IParticipant[];
