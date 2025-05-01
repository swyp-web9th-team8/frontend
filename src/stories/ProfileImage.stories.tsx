import type { Meta, StoryObj } from "@storybook/react";
import ProfileImage from "../components/atoms/ProfileImage/ProfileImage";

const meta = {
    title: "Atoms/ProfileImage/ProfileImage",
    component: ProfileImage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "https://picsum.photos/300",
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 프로필 이미지입니다. size를 지정할지 않았을 때의 크기입니다.'
            }
        }
    }
};

export const Large: Story = {
    args: {
        src: "https://picsum.photos/300",
        size: 40,
    },
    parameters: {
        docs: {
            description: {
                story: '큰 사이즈(40px)로 설정된 프로필 이미지입니다. size prop으로 이미지 크기를 조절할 수 있습니다.'
            }
        }
    }
};

export const WithFallback: Story = {
    args: {
        src: undefined,
        size: 28,
    },
    parameters: {
        docs: {
            description: {
                story: '프로필 이미지가 없을 때의 폴백(fallback) 상태입니다. 기본 아바타 이미지가 자동으로 표시됩니다.'
            }
        }
    }
}; 