import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TimerBase } from './TimerBase';

export default {
	title: 'Timers/TimerBase',
	component: TimerBase,
	argTypes: {
		onClick: { action: 'clicked' },
		onPageChange: { action: 'pageChanged' },
	},
} as Meta<typeof TimerBase>;

const Template: StoryFn<typeof TimerBase> = (args) => <TimerBase {...args} />;

const deadlineDate = { deadline: '2024-07-10' };

export const Default = Template.bind({});
Default.args = {
	...deadlineDate,
};

export const WithSecondaryBackground = Template.bind({});
WithSecondaryBackground.args = {
	...deadlineDate,
	secondary: true,
};
