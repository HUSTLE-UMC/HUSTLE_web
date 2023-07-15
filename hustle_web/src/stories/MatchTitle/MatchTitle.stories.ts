import type { Meta, StoryObj } from "@storybook/react";
import { MatchTitle } from "../../components/FriendlyMatchPage/MatchTitle/MatchTitle";
import { Writing } from "../Icons/svg/index";

const meta = {
  title: "Components/FriendlyMatch/MatchTitle",
  component: MatchTitle,
} satisfies Meta<typeof MatchTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Match: Story = {
  args: {
    label: "교류전 구해요!",
    Icon: Writing,
  },
};

export const Invitation: Story = {
  args: {
    label: "초청해주세요!",
    Icon: Writing,
  },
};
