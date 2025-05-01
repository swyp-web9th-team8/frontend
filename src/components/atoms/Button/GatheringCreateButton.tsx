"use client"

import AddIcon from "@/assets/icons/add.svg";

export default function GatheringCreateButton() {
    return (
        <button className="w-16 h-16 flex justify-center items-center bg-[#59AC6E] rounded-full cursor-pointer bottom-[18px] right-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] fixed">
            <AddIcon className="w-8 h-8" />
        </button>
    );
}