"use client";

import Toggle from "@/components/atoms/Toggle/Toggle";
import { usePostFcmToken } from "@/hooks/mutations/useFcm";
import {
  getDeviceToken,
  handleNotificationPermission,
} from "@/utils/notificationPermission";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "../toast/ToastContext";

interface Props {
  title: string;
  description: string;
  isChecked: boolean;
}

function NotificationSettingsItem({ title, description, isChecked }: Props) {
  const [isOn, setIsOn] = useState(isChecked);
  const { mutate: postFcmToken } = usePostFcmToken();

  const handleChange = (isOn: boolean) => {
    setIsOn(!isOn);
  };

  const showToast = useToast();

  const handleNotificationError = useCallback(
    (error: Error) => {
      showToast(error.message);
    },
    [showToast],
  );

  // isOn이 true일 때 푸시 알림 권한 요청
  useEffect(() => {
    if (isOn) {
      handleNotificationPermission()
        .then(() => {
          getDeviceToken()
            .then((token) => {
              postFcmToken(token as string);
            })
            .catch((error) => {
              throw error;
            });
        })
        .catch(handleNotificationError);
    }
  }, [isOn, postFcmToken, handleNotificationError]);

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
