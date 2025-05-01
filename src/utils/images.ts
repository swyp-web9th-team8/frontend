const AVATAR_PATH = "/avatar";

const DEFAULT_AVATARS = {
  male: [
    `${AVATAR_PATH}/male/1.svg`,
    `${AVATAR_PATH}/male/2.svg`,
    `${AVATAR_PATH}/male/3.svg`,
  ],
  female: [
    `${AVATAR_PATH}/female/1.svg`,
    `${AVATAR_PATH}/female/2.svg`,
    `${AVATAR_PATH}/female/3.svg`,
  ],
} as const;

export const getRandomAvatar = (gender: "male" | "female") => {
  const avatars = DEFAULT_AVATARS[gender];
  return avatars[Math.floor(Math.random() * avatars.length)];
};
