import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputRating } from './InputRating';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Shared/Inputs/InputRating',
	component: InputRating,
	argTypes: {},
} as Meta<typeof InputRating>;

const Template: StoryFn<typeof InputRating> = (args) => {
	const onClickAction = action('onClick');
	const onPointerLeaveAction = action('onPointerLeave');
	const onPointerEnterAction = action('onPointerEnter');

	const handleClick = () => {
		onClickAction('onClick');
	};

	const handlePointeEnter = () => {
		onPointerEnterAction('onPointerEnter');
	};

	const handlePointerLeave = () => {
		onPointerLeaveAction('onPointerLeave');
	};

	return (
		<InputRating
			{...args}
			onClick={handleClick}
			onPointerLeave={handlePointerLeave}
			onPointerEnter={handlePointeEnter}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	initialValue: 3,
	transition: true,
};

export const ReadOnlyMode = Template.bind({});
ReadOnlyMode.args = {
	initialValue: 2,
	readonly: true,
};

export const DisableHover = Template.bind({});
DisableHover.args = {
	allowHover: false,
	disableFillHover: false,
};

export const DisableFillHover = Template.bind({});
DisableFillHover.args = {
	disableFillHover: true,
};
