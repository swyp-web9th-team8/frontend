"use client";

import { useFetchCompletedGatheringList } from "@/hooks/queries/useFetchGatheringList";

export default function GatheringList() {
  const { data } = useFetchCompletedGatheringList();
  console.log(data);

  // const groupedGatherings = groupGatheringsByDate(data);
  return <div>안녕</div>;
  //
  //return (
  //  <div className="flex flex-col gap-5">
  //    {groupedGatherings.map((gatherings, index) => (
  //      <div className="flex flex-row gap-2" key={index}>
  //        <div>
  //          <DateBadge
  //            month={getMonth(gatherings[0].meetingTime)}
  //            day={getDay(gatherings[0].meetingTime)}
  //            dayOfWeek={getDayOfWeek(gatherings[0].meetingTime)}
  //          />
  //        </div>
  //        <div className="flex flex-1 flex-col gap-5">
  //          {gatherings.map((gathering, index) => (
  //            <GatheringItem {...gathering} key={index} />
  //          ))}
  //        </div>
  //      </div>
  //    ))}
  //  </div>
  //);
}
