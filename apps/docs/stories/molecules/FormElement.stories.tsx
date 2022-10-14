import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormElement } from "@doyourthing/core";

export default {
	title: "Molecules/FormElement",
	component: FormElement,
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args: any) => (
	<FormElement {...args} />
);

export const EmailInput = Template.bind({});
EmailInput.args = {
	type: "email",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
	type: "password",
	props: {
		show: false,
	},
};

export const TextInput = Template.bind({});
TextInput.args = {
	type: "text",
};
