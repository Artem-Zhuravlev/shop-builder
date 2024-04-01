import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TooltipBase } from './TooltipBase';

export default {
	title: 'Tooltip',
	component: TooltipBase,
} as Meta<typeof TooltipBase>;

const Template: StoryFn<typeof TooltipBase> = (args) => (
	<TooltipBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
	content: 'Some content',
	children: <button>Some cool button</button>,
};
