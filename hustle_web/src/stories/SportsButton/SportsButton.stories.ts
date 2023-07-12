import { Meta, StoryObj } from "@storybook/react";
import SportsButton from "../../components/SportsButton/SportsButton";
import { BasketBall } from "../assets/SportsButton";
import { Tennis } from "../assets/SportsButton";

const meta = {
  title: "Example/SportsButton",
  component: SportsButton,
} satisfies Meta<typeof SportsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basket0: Story = {
  args: {
    label: "농구",
    Icon: BasketBall,
  },
};

export const Basket1: Story = {
  args: {
    label: "농구",
    clicked: true,
    Icon: BasketBall,
  },
};

export const Tennis0: Story = {
  args: {
    label: "테니스",
    Icon: Tennis,
  },
};

export const Tennis1: Story = {
  args: {
    label: "테니스",
    clicked: true,
    Icon: Tennis,
  },
};
