"use client"

import { IGatheringItem } from "@/types/gatherings";
import { getDay, getDayOfWeek, getMonth } from "@/utils/day";
import { groupGatheringsByDate } from "@/utils/gatherings";
import DateBadge from "../../atoms/Badge/DateBadge";
import GatheringItem from "./GatheringItem";

interface Props {
    gatherings: IGatheringItem[];
}
export default function GatheringList({ gatherings }: Props) {
    const groupedGatherings = groupGatheringsByDate(gatherings);

    return (
        <div className="flex flex-col gap-5">
            {groupedGatherings.map((gatherings, index) => (
                <div className="flex flex-row gap-2" key={index}>
                    <div>
                        <DateBadge month={getMonth(gatherings[0].meetingTime)} day={getDay(gatherings[0].meetingTime)} dayOfWeek={getDayOfWeek(gatherings[0].meetingTime)} />
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                        {gatherings.map((gathering, index) => (
                            <GatheringItem {...gathering} key={index} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

