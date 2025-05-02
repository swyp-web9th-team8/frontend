import type { Meta, StoryObj } from "@storybook/react";
import InfoBox from "@/components/atoms/InfoBox/temp";

const meta: Meta<typeof InfoBox> = {
  title: "Atoms/InfoBox",
  component: InfoBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "InfoBox는 간단한 라벨과 수치를 조합하여 정보를 보여주는 박스형 UI입니다. 대시보드나 프로필 통계 요약 등에 사용됩니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "참여한 모임",
    value: 11,
  },
  parameters: {
    docs: {
      description: {
        story: "일반적인 소규모 수치를 보여주는 기본 InfoBox입니다.",
      },
    },
  },
};

export const LargeNumber: Story = {
  args: {
    label: "내 기록(누적)",
    value: 12345,
  },
  parameters: {
    docs: {
      description: {
        story: "큰 수치를 시각적으로 강조할 때 사용되는 InfoBox입니다.",
      },
    },
  },
};
