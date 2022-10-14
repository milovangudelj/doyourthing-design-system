import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "@doyourthing/core";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Logo",
	component: Logo,
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args: any) => <Logo {...args} />;

export const Full = Template.bind({});
Full.args = {
	type: "full",
	size: "md",
};

export const Short = Template.bind({});
Short.args = {
	type: "short",
	size: "md",
};

export const Mark = Template.bind({});
Mark.args = {
	type: "mark",
	size: "md",
};

export const Type = Template.bind({});
Type.args = {
	type: "type",
	size: "md",
};
