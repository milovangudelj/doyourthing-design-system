import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PasswordInput, type PasswordInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInputs/PasswordInput",
	component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (
	args: PasswordInputProps
) => <PasswordInput {...args} />;

export const Password = Template.bind({});
Password.args = {
	show: false,
};
