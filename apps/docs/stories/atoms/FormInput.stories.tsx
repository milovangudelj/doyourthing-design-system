import React from "react";
import { Story, Meta } from "@storybook/react";

import { FormInput, FormInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInput",
	component: FormInput,
} as Meta<typeof FormInput>;

const Template: Story<typeof FormInput> = (args: FormInputProps) => (
	<FormInput {...args} />
);

export const Email = Template.bind({});
Email.args = {
	type: "email",
	props: { name: "Email" },
};

export const Password = Template.bind({});
Password.args = {
	type: "password",
	props: { name: "Password" },
};

export const Text = Template.bind({});
Text.args = {
	type: "text",
	props: { name: "Text" },
};
