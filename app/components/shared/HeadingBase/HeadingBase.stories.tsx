import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeadingBase } from './HeadingBase';

export default {
	title: 'Heading/HeadingBase',
	component: HeadingBase,
	argTypes: {
		className: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		},
	},
} as Meta<typeof HeadingBase>;

const Template: StoryFn<typeof HeadingBase> = (args) => (
	<HeadingBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
	level: 2,
	children: 'Title base',
	className: 'some title',
};
