import { getAbbreviatedDayOfWeek, getAbbreviatedMonth } from "@/utils/day";

interface Props {
    month: number;
    day: number;
    dayOfWeek: string;
}

export default function DateBadge({ month, day, dayOfWeek }: Props) {
    return (
        <div className="w-14 px-1 pt-1 pb-1.5 bg-white rounded-xl inline-flex flex-col justify-start items-center gap-1">
            <div className="self-stretch px-2 py-1 bg-[#F6F6F6] rounded-tl-xl rounded-tr-xl inline-flex justify-center items-center gap-2">
                <div className="justify-start text-[#888888] text-[10px] font-medium leading-none">{getAbbreviatedMonth(month)}</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
                <div className="self-stretch text-center justify-start text-[#59AC6E] text-sm font-bold leading-none">{day}</div>
                <div className="self-stretch text-center justify-start text-[#888888] text-xs font-medium  leading-none">{getAbbreviatedDayOfWeek(dayOfWeek)}</div>
            </div>
        </div>
    );
}

