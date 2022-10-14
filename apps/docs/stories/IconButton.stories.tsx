import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton, IconButtonProps } from "@doyourthing/core";
import { DiamondsFour } from "phosphor-react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/IconButton",
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = ({
	color,
	...props
}: IconButtonProps) => (
	<div className="flex space-x-4">
		<IconButton color="primary" {...props} />
		<IconButton color="accent" {...props} />
		<IconButton color="red" {...props} />
		<IconButton color="blue" {...props} />
		<IconButton color="zinc" {...props} />
	</div>
);

export const Filled = Template.bind({});
Filled.args = {
	variant: "filled",
	disabled: false,
	icon: DiamondsFour,
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	disabled: false,
	icon: DiamondsFour,
};

export const Borderless = Template.bind({});
Borderless.args = {
	variant: "text",
	disabled: false,
	icon: DiamondsFour,
};
