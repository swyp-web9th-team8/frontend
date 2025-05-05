// GreenBadge.stories.tsx

import GreenBadge from "@/components/atoms/Badge/GreenBadge";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/GreenBadge",
  component: GreenBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "❌ 디자인 시스템 완성되기 전이라 모든 UI 케이스를 포함하지 않습니다. 나중에 완성하겠습니다.",
      },
    },
  },
  argTypes: {
    fontSize: {
      control: {
        type: "radio",
        options: ["body3", "body4"],
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GreenBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body3: Story = {
  args: {
    children: "모임완료 👍",
    fontSize: "body3",
  },
  parameters: {
    docs: {
      description: {
        story: "크기가 body3-medium인 뱃지입니다.",
      },
    },
  },
};

export const Body4: Story = {
  args: {
    children: "모임완료 👍",
    fontSize: "body4",
  },
  parameters: {
    docs: {
      description: {
        story: "크기가 body4-medium인 뱃지입니다.",
      },
    },
  },
};
