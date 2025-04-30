import type { Meta, StoryObj } from "@storybook/react";
import ProfileImages from "../components/atoms/ProfileImage/ProfileImages";

const meta = {
    title: "Atoms/ProfileImage/ProfileImages",
    component: ProfileImages,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProfileImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: ["https://picsum.photos/200", "https://picsum.photos/201"],
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 두 개의 프로필 이미지가 겹쳐진 형태입니다. 이미지들은 자동으로 50%씩 겹쳐져 표시됩니다.'
            }
        }
    }
};

export const ThreeProfiles: Story = {
    args: {
        src: [
            "https://picsum.photos/200",
            "https://picsum.photos/201",
            "https://picsum.photos/202"
        ],
        maxCount: 3,
        size: 28,
    },
    parameters: {
        docs: {
            description: {
                story: '세 개의 프로필 이미지가 순차적으로 겹쳐진 형태입니다. maxCount를 3으로 설정하여 세 개의 이미지를 모두 표시합니다.'
            }
        }
    }
};

export const WithFallback: Story = {
    args: {
        src: ["https://picsum.photos/200"],
        maxCount: 2,
        size: 28,
    },
    parameters: {
        docs: {
            description: {
                story: '프로필 이미지가 없을 때의 폴백(fallback) 상태입니다. 프로필 이미지 수가 maxCount보다 적을 경우 폴백 이미지가 표시됩니다.'
            }
        }
    }
};

export const Large: Story = {
    args: {
        src: ["https://picsum.photos/200", "https://picsum.photos/201"],
        maxCount: 2,
        size: 100,
    },
    parameters: {
        docs: {
            description: {
                story: '큰 사이즈(100px)로 설정된 프로필 이미지들입니다. size prop으로 이미지 크기를 조절할 수 있습니다.'
            }
        }
    }
};

export const Single: Story = {
    args: {
        src: ["https://picsum.photos/200"],
        maxCount: 1,
    },
    parameters: {
        docs: {
            description: {
                story: '하나의 프로필 이미지만 표시됩니다. 하지만 하나의 이미지만 표시할 경우 ProfileImage 컴포넌트 사용이 권장됩니다.'
            }
        }
    }
};