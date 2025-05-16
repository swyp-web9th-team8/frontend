export interface UserProfile {
  id: number;
  nickname: string;
  email: string;
  region: string;
  profileImageUrl: string;
  writtenPostsCount: number;
  participatedCount: number;
  lastBadgeIconDir: string | null;
  totalMeet: number;
}
