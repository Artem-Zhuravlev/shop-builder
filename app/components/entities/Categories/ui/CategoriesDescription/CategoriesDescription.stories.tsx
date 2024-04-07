import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CategoriesDescription } from './CategoriesDescription';

export default {
	title: 'Categories/CategoriesDescription',
	component: CategoriesDescription,
} as Meta<typeof CategoriesDescription>;

const Template: StoryFn<typeof CategoriesDescription> = (args) => {
	return <CategoriesDescription {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'Desktops',
};
