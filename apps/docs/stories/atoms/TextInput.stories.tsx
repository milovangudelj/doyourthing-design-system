import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextInput, TextInputProps } from "@doyourthing/core";

export default {
	title: "Atoms/FormInputs/TextInput",
	component: TextInput,
} as Meta<typeof TextInput>;

const Template: Story<typeof TextInput> = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const Text = Template.bind({});
Text.args = {};
