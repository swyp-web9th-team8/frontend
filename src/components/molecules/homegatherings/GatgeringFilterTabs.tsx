import React from "react";

interface Props {
  selected: "active" | "closed";
  onChange: (value: "active" | "closed") => void;
}

export default function GatheringFilterTabs({ selected, onChange }: Props) {
  return (
    <div className="mb-3.5">
      <button
        className={`font-gsans-bold text-body1-bold border-grey-200 mr-2 border-r-2 pr-2 ${
          selected === "active" ? "text-green" : "text-grey-200"
        }`}
        onClick={() => onChange("active")}
      >
        모집중인 모임
      </button>
      <button
        className={`font-gsans-bold text-body1-bold ${
          selected === "closed" ? "text-green" : "text-grey-200"
        }`}
        onClick={() => onChange("closed")}
      >
        모집 완료된 모임
      </button>
    </div>
  );
}
