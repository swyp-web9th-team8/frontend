import Nav from "@/components/organisms/Nav";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/Nav",
  component: Nav,

  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      story: {
        inline: true,
        iframeHeight: 100,
      },
      description: {
        component: `앱 하단에 고정된 메인 네비게이션 바 컴포넌트입니다. 현재 경로에 따라 활성화된 메뉴가 강조됩니다.
          (주의) storybook 환경에서 네비게이션 메뉴가 적절히 동작하지 않을 수 있습니다.`,
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/home",
      },
    },
    docs: {
      description: {
        story: "'홈' 메뉴가 활성화된 상태입니다.",
      },
    },
  },
};

export const Gatherings: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/gatherings",
      },
    },
    docs: {
      description: {
        story: "'모임' 메뉴가 활성화된 상태입니다.",
      },
    },
  },
};

export const Ranking: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/ranking",
      },
    },
    docs: {
      description: {
        story: "'랭킹' 메뉴가 활성화된 상태입니다.",
      },
    },
  },
};

export const Profile: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/profile",
      },
    },
    docs: {
      description: {
        story: "'프로필' 메뉴가 활성화된 상태입니다.",
      },
    },
  },
};
