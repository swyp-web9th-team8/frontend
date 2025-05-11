import BadgeYellow from "@/assets/icons/badge-yellow.svg";
import BadgeBlue from "@/assets/icons/badge-blue.svg";
import BadgePurple from "@/assets/icons/badge-purple.svg";
import BadgeSteel from "@/assets/icons/badge-steel.svg";

export const BADGES = [
  {
    id: 1,
    label: "옐로우",
    level: 10,
    color: "yellow",
    required: 10,
    Icon: BadgeYellow,
  },
  {
    id: 2,
    label: "블루",
    level: 20,
    color: "blue",
    required: 20,
    Icon: BadgeBlue,
  },
  {
    id: 3,
    label: "퍼플",
    level: 30,
    color: "purple",
    required: 30,
    Icon: BadgePurple,
  },
  {
    id: 4,
    label: "틸",
    level: 40,
    color: "steel",
    required: 40,
    Icon: BadgeSteel,
  },
];
