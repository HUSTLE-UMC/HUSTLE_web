import { Meta, StoryObj } from "@storybook/react";
import Index from "../components/SportsButton/SportsButton";
import { ReactComponent as BasketBall } from "./assets/basketball.svg";
import { ReactComponent as Tennis } from "./assets/tennis.svg";
const meta = {
  title: "Example/SportsButton",
  component: Index,
} satisfies Meta<typeof Index>;

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
