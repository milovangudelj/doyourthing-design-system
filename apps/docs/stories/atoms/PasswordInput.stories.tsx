import React from "react";
import { Story, Meta } from "@storybook/react";

import { PasswordInput, PasswordInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInputs/PasswordInput",
	component: PasswordInput,
} as Meta<typeof PasswordInput>;

const Template: Story<typeof PasswordInput> = (args: PasswordInputProps) => (
	<PasswordInput {...args} />
);

export const Password = Template.bind({});
Password.args = {
	show: false,
};
