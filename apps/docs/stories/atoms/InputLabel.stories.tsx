import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputLabel } from "@doyourthing/core";

export default {
	title: "Atoms/InputLabel",
	component: InputLabel,
} as Meta<typeof InputLabel>;

const Template: Story<typeof InputLabel> = (args: any) => (
	<InputLabel {...args} />
);

export const Label = Template.bind({});
Label.args = {
	htmlFor: "email",
	label: "Label",
};
