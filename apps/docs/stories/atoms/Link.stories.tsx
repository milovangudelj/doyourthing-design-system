import React from "react";
import { Story, Meta } from "@storybook/react";

import { Link } from "@doyourthing/core";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Link",
	component: Link,
} as Meta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof Link> = (args: any) => <Link {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	href: "#",
	children: "This is a link",
};
