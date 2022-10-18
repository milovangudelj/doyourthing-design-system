import React from "react";
import { Story, Meta } from "@storybook/react";

import { EmailInput, EmailInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInputs/EmailInput",
	component: EmailInput,
} as Meta<EmailInputProps>;

const Template: Story<EmailInputProps> = (args: EmailInputProps) => (
	<EmailInput {...args} />
);

export const Email = Template.bind({});
Email.args = {};
