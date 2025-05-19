import { IGatheringItem } from "@/types/gatherings";
import { formatDate } from "./day";

type GroupedGatherings = Record<string, IGatheringItem[]>;

export const groupGatheringsByDate = (
  gatherings: IGatheringItem[],
  desc?: boolean,
): IGatheringItem[][] => {
  gatherings.sort((a, b) => {
    const timeA = new Date(a.meetingTime).getTime();
    const timeB = new Date(b.meetingTime).getTime();
    return desc ? timeB - timeA : timeA - timeB;
  });

  const groupGatheringObj = gatherings.reduce(
    (acc: GroupedGatherings, gathering) => {
      const dateKey = formatDate(gathering.meetingTime, "yyyy-MM-dd");

      return {
        ...acc,
        [dateKey]: [...(acc[dateKey] || []), gathering],
      };
    },
    {},
  );

  return Object.values(groupGatheringObj);
};
