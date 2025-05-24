import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import IconCalendar from "@/assets/icons/calendar01.svg";
import { useRouter } from "next/navigation";

interface MyGatheringCardItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: string;
  isReviewed: boolean;
}

interface MyGatheringCardListProps {
  items: MyGatheringCardItem[];
}

export default function MyGatheringCardList({
  items,
}: MyGatheringCardListProps) {
  const router = useRouter();

  const handleCardClick = (item: MyGatheringCardItem) => {
    const isComplete = item.status === "완료";
    const path = isComplete
      ? `/gatherings/completed/${item.id}`
      : `/gatherings/recruiting/${item.id}`;

    router.push(path);
  };

  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const isComplete = item.status === "완료";

          return (
            <li
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="bg-grey-0 flex cursor-pointer flex-col gap-3 rounded-2xl p-5 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-gsans-bold text-body1-bold text-grey-950">
                  {item.title}
                </h3>
                <span
                  className={`text-grey-0 text-body4-medium font-gsans-medium rounded-xl px-3 py-0.5 ${
                    isComplete ? "bg-green" : "bg-yellow"
                  }`}
                >
                  {item.status}
                </span>
                {item.isReviewed && (
                  <span className="bg-blue text-grey-0 text-body4-medium font-gsans-medium rounded-xl px-3 py-0.5">
                    리뷰 완료
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                  <IconCalendar className="h-5 w-5" />
                  <p>{item.date}</p>
                </div>
                <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                  <IconClock className="h-5 w-5" />
                  <p>{item.time}</p>
                </div>
                <div className="font-gsans-medium text-body2-medium text-grey-950 flex gap-[0.8125rem]">
                  <IconLocation className="h-5 w-5" />
                  <p>{item.location}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
