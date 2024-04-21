import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AccountWishList } from './AccountWishList';

export default {
	title: 'Entities/Account/AccountWishList',
	component: AccountWishList,
} as Meta<typeof AccountWishList>;

const Template: StoryFn<typeof AccountWishList> = (args) => {
	return <AccountWishList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			stock: 'Out of stock',
			price: 100,
			oldPrice: 120,
		},
		{
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			stock: 'Out of stock',
			price: 100,
			oldPrice: 120,
		},
	],
};
