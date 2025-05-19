import IconCalendar from "@/assets/icons/calendar01.svg";
import IconClock from "@/assets/icons/clock.svg";
import IconLocation from "@/assets/icons/location.svg";
import Link from "next/link";

interface SearchCardItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

interface SearchCardListProps {
  title: string;
  items: SearchCardItem[];
  highlightColor: string;
}

export default function SearchCardList({
  title,
  items,
  highlightColor,
}: SearchCardListProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-grey-950 text-body-1-bold font-gsans-bold">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/gatherings/recruiting/${item.id}`}
            className="bg-grey-0 flex flex-col gap-3 rounded-2xl p-5 shadow-[0_4px_24px_rgba(170,170,170,0.15)]"
          >
            <div className="flex gap-1">
              <h3 className="font-gsans-bold text-body1-bold text-grey-950">
                {item.title}
              </h3>
              <span
                className={`text-grey-0 text-body4-medium font-gsans-medium rounded-xl px-3 py-0.5 ${highlightColor}`}
              >
                {item.status}
              </span>
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
          </Link>
        ))}
      </ul>
    </div>
  );
}
