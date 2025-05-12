import type { Meta, StoryObj } from "@storybook/react";
import ActivityRow from "../components/molecules/ActivityRow";
import IconGroup from "@/assets/icons/IconGroup01.svg";
import IconLocation from "@/assets/icons/IconLocation.svg";

const meta = {
  title: "Molecules/ActivityRow",
  component: ActivityRow,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "아이콘, 라벨, 우측 화살표로 구성된 활동 항목 컴포넌트입니다. 주로 설정 또는 정보 목록 등에서 사용됩니다.",
      },
    },
  },
} satisfies Meta<typeof ActivityRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    label: "내 모임",
    icon: <IconGroup />,
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘과 텍스트만 포함된 기본 ActivityRow입니다.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    label: "지역 설정",
    value: "강남구 개포1동",
    icon: <IconLocation />,
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: "우측에 부가 정보(value)가 함께 표시되는 ActivityRow입니다.",
      },
    },
  },
};
