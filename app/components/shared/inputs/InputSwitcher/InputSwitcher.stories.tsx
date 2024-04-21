import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputSwitcher } from './InputSwitcher';

export default {
	title: 'Shared/Inputs/InputSwitcher',
	component: InputSwitcher,
} as Meta<typeof InputSwitcher>;

const Template: StoryFn<typeof InputSwitcher> = (args) => {
	return (
		<div style={{ width: '300px' }}>
			<InputSwitcher {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: true,
};
