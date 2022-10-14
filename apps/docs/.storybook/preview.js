import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode'

import { dytDark, dytLight } from './dytTheme';

import "../globals.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
	  'storybook/docs/panel': { index: -1 },
	},
	darkMode: {
		current: 'dark',
		dark: dytDark,
		light: dytLight,
		stylePreview: true
	},
	docs: {
		container: (props) => {
			 const isDark = useDarkMode();
	 
			 const { id: storyId, storyById } = props.context;
			 const {
				  parameters: { docs = {} },
			 } = storyById(storyId);
			 docs.theme = isDark ? dytDark : dytLight;
	 
			 return React.createElement(DocsContainer, props);
		},
  },
};
