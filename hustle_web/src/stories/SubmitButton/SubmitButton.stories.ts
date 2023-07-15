import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "../../components/FriendlyMatchPage/SubmitButton/SubmitButton";
import { Submit } from "../Icons/svg/index";

const meta = {
  title: "Components/FriendlyMatch/SubmitButton",
  component: SubmitButton,
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit1: Story = {
  args: {
    label: "게시하기",
    Icon: Submit,
  },
};

export const Submit2: Story = {
  args: {
    label: "신청하기",
    Icon: Submit,
  },
};

export const Login: Story = {
  args: {
    label: "로그인",
    Icon: Submit,
    login: true,
  },
};

export const MoreInfo: Story = {
  args: {
    label: "더 보기",
    Icon: Submit,
    more: true,
  },
};
