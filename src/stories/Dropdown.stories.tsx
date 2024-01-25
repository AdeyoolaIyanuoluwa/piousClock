import React from "react";
import { Meta, Story } from "@storybook/react";
import { DropdownProps } from "@/types";
import Dropdown from "../components/Dropdown";
import { Option } from "../components/Dropdown/Option";

export default {
    title: 'Components/Dropdown',
    component: Dropdown
} as Meta;

const Template: Story<DropdownProps> = () => {
    return (
        <Dropdown content={
            <div>
                <Option>Admin Profile</Option>
                <Option>Log out</Option>
            </div>
        } />
    );
};

export const DropdownTemplate = Template.bind({})


