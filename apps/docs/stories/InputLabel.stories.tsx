import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputLabel } from "@doyourthing/core";

export default {
	title: "Atoms/InputLabel",
	component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args: any) => (
	<InputLabel {...args} />
);

export const Label = Template.bind({});
Label.args = {
	htmlFor: "email",
	label: "Label",
};
