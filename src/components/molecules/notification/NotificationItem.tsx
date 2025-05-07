import IconExclamation from "@/assets/icons/IconExclamation.svg";
import IconLocation from "@/assets/icons/IconLocation.svg";
import { notificationType } from "@/types/notification";
import { getDiffTime } from "@/utils/day";

interface Props {
  title: notificationType;
  contents: string;
  time: string;
}

const NOTIFICATION_STYLES = {
  ICON_BG_COLOR: {
    "신규 모임": "bg-yellow",
    "내가 만든 모임": "bg-blue",
  },
  ICON_ATTR: "relative h-4 w-4 text-white",
} as const;

function NotificationItem({ title, contents, time }: Props) {
  return (
    <div className="font-gsans-medium flex flex-col items-start justify-start gap-7 px-5 py-3.5 first:bg-[#d1d1d1]/50">
      <div className="z-10 inline-flex items-start gap-[11px] self-stretch">
        <div className="relative flex h-6 w-6 items-center justify-center">
          <div
            className={`absolute top-0 left-0 h-6 w-6 rounded-full ${NOTIFICATION_STYLES.ICON_BG_COLOR[title as keyof typeof NOTIFICATION_STYLES.ICON_BG_COLOR]} -z-10`}
          />
          {title === "신규 모임" ? (
            <IconLocation className={NOTIFICATION_STYLES.ICON_ATTR} />
          ) : (
            <IconExclamation className={NOTIFICATION_STYLES.ICON_ATTR} />
          )}
        </div>
        <div className="inline-flex w-80 flex-1 flex-col items-start justify-start gap-1 pt-[3px]">
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="text-body2-medium justify-start text-gray-400">
              {title}
            </div>
            <div className="text-body3-medium justify-start text-gray-400">
              {getDiffTime(time)}
            </div>
          </div>
          <div className="text-body1-medium flex flex-wrap justify-start self-stretch leading-normal text-gray-950">
            {contents}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;
