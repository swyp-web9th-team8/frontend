interface TimePickerProps {
  time: string[];
  handleTimeScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  selectedTime: string;
}

const TimePicker = ({
  time,
  handleTimeScroll,
  selectedTime,
}: TimePickerProps) => {
  return (
    <div className="relative h-[140px] w-16">
      {/* 스크롤 박스 */}
      <div
        className="scrollbar-hide h-full snap-y snap-mandatory overflow-auto overscroll-contain py-[60px]"
        onScroll={handleTimeScroll}
      >
        {/* 시간/분 아이템들 */}
        {time.map((t) => (
          <div
            key={t}
            className={`flex h-[34px] snap-center items-center justify-center ${
              selectedTime === t ? "font-medium text-black" : "text-gray-400"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
