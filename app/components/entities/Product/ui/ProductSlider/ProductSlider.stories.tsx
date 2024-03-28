import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProductSlider } from './ProductSlider';
import placeholderImage from '@assets/placeholder.jpg';

export default {
	title: 'Product/ProductSlider',
	component: ProductSlider,
} as Meta<typeof ProductSlider>;

const Template: StoryFn<typeof ProductSlider> = (args) => {
	return <ProductSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			image: 'https://placehold.co/450x590/000000/FFE400/jpg',
			value: 'alt 1',
		},
		{
			image: 'https://placehold.co/450x590/000000/FFB1F5/jpg',
			value: 'alt 2',
		},
		{
			image: 'https://placehold.co/450x590/000000/FFE400/jpg',
			value: 'alt 3',
		},
		{
			image: 'https://placehold.co/450x590/000000/FFB1F5/jpg',
			value: 'alt 4',
		},
	],
};
