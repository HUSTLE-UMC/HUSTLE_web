import type { Meta, StoryObj } from "@storybook/react";
import { MyClubList } from "../../components/FriendlyMatchPage/MyClubList/MyClubList";

const meta = {
  title: "Components/FriendlyMatch/MyClubList",
  component: MyClubList,
} satisfies Meta<typeof MyClubList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Match: Story = {
  args: {
    clubs: ["가톨릭대학교 바스타즈1", "가톨릭대학교 바스타즈2"],
  },
};
