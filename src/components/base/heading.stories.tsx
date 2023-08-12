import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta = {
  title: "Base/Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello World",
  },
};
