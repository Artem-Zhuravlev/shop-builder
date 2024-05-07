import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CartProductsTable } from './CartProductsTable';

export default {
	title: 'Entities/Cart/CartProductsTable',
	component: CartProductsTable,
} as Meta<typeof CartProductsTable>;

const Template: StoryFn<typeof CartProductsTable> = (args) => {
	return <CartProductsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			id: 1,
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			price: 100,
			quantity: 3,
		},
		{
			id: 2,
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			price: 100,
			quantity: 1,
		},
	],
};
