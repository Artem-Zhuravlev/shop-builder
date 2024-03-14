import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TheFooter } from './TheFooter';

export default {
	title: 'Layout/TheFooter',
	component: TheFooter,
} as Meta<typeof TheFooter>;

const Template: StoryFn<typeof TheFooter> = (args) => <TheFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
