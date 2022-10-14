import React from "react";
import { Meta, Story } from "@storybook/react";

import { AuthDivider, AuthDividerProps } from "@doyourthing/core";

export default {
	title: "Atoms/AuthDivider",
	component: AuthDivider,
} as Meta<AuthDividerProps>;

const Template: Story<AuthDividerProps> = (args) => <AuthDivider {...args} />;

export const DividerFull: Story<AuthDividerProps> = Template.bind({});
DividerFull.args = {};

export const DividerShort: Story<AuthDividerProps> = Template.bind({});
DividerShort.args = {
	fullWidth: false,
	className: "w-12",
};
