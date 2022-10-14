import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EmailInput, type EmailInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInputs/EmailInput",
	component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args: EmailInputProps) => (
	<EmailInput {...args} />
);

export const Email = Template.bind({});
Email.args = {};
