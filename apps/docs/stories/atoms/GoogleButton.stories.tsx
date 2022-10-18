import React from "react";
import { Meta, Story } from "@storybook/react";

import { GoogleButton, ButtonProps } from "@doyourthing/core";

export default {
	title: "Atoms/GoogleButton",
	component: GoogleButton,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <GoogleButton {...args} />;

export const SignIn: Story<ButtonProps> = Template.bind({});
SignIn.args = {
	children: "Sign in with Google",
};

export const SignUp: Story<ButtonProps> = Template.bind({});
SignUp.args = {
	children: "Sign up with Google",
};
