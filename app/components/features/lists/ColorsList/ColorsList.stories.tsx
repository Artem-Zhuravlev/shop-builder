import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ColorsList } from './ColorsList';
import { action as addonAction } from '@storybook/addon-actions';

export default {
	title: 'Lists/ColorsList',
	component: ColorsList,
	parameters: {
		actions: {
			handles: ['onChange'],
		},
	},
} as Meta<typeof ColorsList>;

const Template: StoryFn<typeof ColorsList> = (args) => {
	const handleSelectedColors = (value: any) =>
		addonAction('onSelectedColor')(value);

	return (
		<ColorsList
			{...args}
			onSelectedColor={handleSelectedColors}
		/>
	);
};

const items = [
	{ color: '#001df2', value: 'blue', tip: 'Blue' },
	{ color: '#f20794', value: 'pink', tip: 'Pink' },
	{ color: '#000000', value: 'black', tip: 'Black' },
	{ color: '#f18309', value: 'orange', tip: 'Orange' },
	{ color: '#f00100', value: 'red', tip: 'Red' },
	{ color: '#b82b2b', value: 'brown', tip: 'Brown' },
	{ color: '#2bce01', value: 'salad', tip: 'Salad' },
	{ color: '#e5f002', value: 'yellow', tip: 'Yellow' },
];

export const Default = Template.bind({});
Default.args = {
	items,
};

export const WithRadioInputs = Template.bind({});
WithRadioInputs.args = {
	type: 'radio',
	items,
};

export const WithRoundedBehavior = Template.bind({});
WithRoundedBehavior.args = {
	rounded: true,
	items,
};
