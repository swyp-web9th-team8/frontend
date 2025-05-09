import React from "react";

export type Props = {
  title: string;
  children: React.ReactNode;
};

export function ParticipantInfo({ title, children }: Props) {
  return (
    <div className="inline-flex w-36 flex-col items-start justify-start gap-2">
      <div className="font-gsans-bold justify-start self-stretch text-base leading-normal font-bold text-gray-950">
        {title}
      </div>
      <div className="inline-flex items-center justify-start gap-2 self-stretch">
        {children}
      </div>
    </div>
  );
}

export default ParticipantInfo;
