import React from "react";
import Button from "../components/Button";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "@/types";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
      <Button {...args}>Click me</Button>
  );
};
export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  theme: "primary",
  size: "lg",
};
export const PrimarySmall = Template.bind({});

PrimarySmall.args = {
  theme: "primary",
  size: "sm",
};
export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  theme: "secondary",
  size: "sm",
};
