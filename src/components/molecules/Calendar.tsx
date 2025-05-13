"use client";

import { ko } from "date-fns/locale";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
// css override
import styles from "@/styles/Calendar.module.css";

interface CalendarProps {
  date: Date;
  onSelect: (date: Date) => void;
}

const Calendar = ({ date, onSelect }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();
  const today = new Date();

  return (
    <DayPicker
      locale={ko}
      mode="single"
      showOutsideDays
      selected={date}
      disabled={{ before: today }}
      onDayClick={onSelect}
      classNames={{
        today: `text-black`,
        root: `${defaultClassNames.root} ${styles.rdpRoot}`,
        nav: `${styles["rdp-nav"]}`,
        button_previous: `${styles["rdp-button_previous"]}`,
        button_next: `${styles["rdp-button_next"]}`,
        month_caption: `${styles["rdp-month_caption"]}`,
        caption_label: `${styles["rdp-caption_label"]}`,
        months: `${styles["rdp-months"]}`,
        month: `${styles["rdp-month"]}`,
        weekdays: `${styles["rdp-weekdays"]}`,
        weekday: `${styles["rdp-weekday"]}`,
        week: `${styles["rdp-week"]}`,
        weeks: `${styles["rdp-weeks"]}`,
        day: `${styles["rdp-day"]}`,
        selected: `${styles["rdp-selected"]}`,
        outside: `${styles["rdp-outside"]}`,
        chevron: `${styles["rdp-chevron"]}`,
      }}
    />
  );
};

export default Calendar;
