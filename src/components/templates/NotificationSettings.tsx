import NotificationSettingsItem from "../molecules/notification/NotificationSettingsItem";

interface Props {
  settings: {
    title: string;
    description: string;
    isChecked: boolean;
  }[];
}

function NotificationSettings({ settings }: Props) {
  return (
    <div className="flex flex-col gap-[30px]">
      {settings.map((setting, index) => (
        <NotificationSettingsItem
          key={index}
          isChecked={setting.isChecked}
          title={setting.title}
          description={setting.description}
        />
      ))}
    </div>
  );
}

export default NotificationSettings;
