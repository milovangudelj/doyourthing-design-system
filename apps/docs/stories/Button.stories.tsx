import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "@doyourthing/core";
import { DiamondsFour } from "phosphor-react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
	color,
	...props
}: ButtonProps) => (
	<div className="flex space-x-4">
		<Button
			color="primary"
			leftIcon={DiamondsFour}
			rightIcon={DiamondsFour}
			{...props}
		/>
		<Button
			color="accent"
			leftIcon={DiamondsFour}
			rightIcon={DiamondsFour}
			{...props}
		/>
		<Button
			color="red"
			leftIcon={DiamondsFour}
			rightIcon={DiamondsFour}
			{...props}
		/>
		<Button
			color="blue"
			leftIcon={DiamondsFour}
			rightIcon={DiamondsFour}
			{...props}
		/>
		<Button
			color="zinc"
			leftIcon={DiamondsFour}
			rightIcon={DiamondsFour}
			{...props}
		/>
	</div>
);

export const Filled = Template.bind({});
Filled.args = {
	children: "Button",
	variant: "filled",
	disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Button",
	variant: "outlined",
	disabled: false,
};

export const Borderless = Template.bind({});
Borderless.args = {
	children: "Button",
	variant: "text",
	disabled: false,
};
