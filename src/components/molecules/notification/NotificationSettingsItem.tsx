"use client";

import Toggle from "@/components/atoms/Toggle/Toggle";
import { handleNotificationPermission } from "@/utils/notificationPermission";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  isChecked: boolean;
}

function NotificationSettingsItem({ title, description, isChecked }: Props) {
  const [isOn, setIsOn] = useState(isChecked);

  const handleChange = (isOn: boolean) => {
    setIsOn(!isOn);
  };

  // isOn이 true일 때 푸시 알림 권한 요청

  useEffect(() => {
    if (isOn) {
      handleNotificationPermission();
    }
  }, [isOn]);

  return (
    <div className="font-gsans-medium inline-flex items-start justify-between gap-14 self-stretch">
      <div className="inline-flex flex-col items-start justify-start gap-2.5">
        <div className="text-heading2-medium justify-start self-stretch text-gray-950">
          {title}
        </div>
        <div className="text-body2-medium justify-start self-stretch text-gray-400">
          {description}
        </div>
      </div>
      <Toggle isOn={isOn} onChange={handleChange} />
    </div>
  );
}

export default NotificationSettingsItem;
