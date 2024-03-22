import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CategoriesSlider } from './CategoriesSlider';

export default {
	title: 'Sliders/CategoriesSlider',
	component: CategoriesSlider,
} as Meta<typeof CategoriesSlider>;

const Template: StoryFn<typeof CategoriesSlider> = (args) => {
	return (
		<div>
			<CategoriesSlider />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
