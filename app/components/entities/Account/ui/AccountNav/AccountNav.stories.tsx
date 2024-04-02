import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AccountNav } from './AccountNav';

export default {
	title: 'Account/AccountNav',
	component: AccountNav,
} as Meta<typeof AccountNav>;

const Template: StoryFn<typeof AccountNav> = (args) => {
	return (
		<div style={{ maxWidth: '270px' }}>
			<AccountNav {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			to: '/login',
			value: 'Login',
			icon: 'icon-enter',
		},
		{
			to: '/register',
			value: 'Register',
			icon: 'icon-user-plus',
		},
		{
			to: '/forgotten-password',
			value: 'Forgotten password',
			icon: 'icon-key',
		},
		{
			to: '/account',
			value: 'My Account',
			icon: 'icon-user',
		},
		{
			to: '/address-book',
			value: 'Address Book',
			icon: 'icon-address-book',
		},
		{
			to: '/wish-list',
			value: 'Wish List',
			icon: 'icon-heart',
		},
		{
			to: '/notification',
			value: 'Notification',
			icon: 'icon-bell',
		},
		{
			to: '/order-history',
			value: 'Order History',
			icon: 'icon-gift',
		},
		{
			to: '/downloads',
			value: 'Downloads',
			icon: 'icon-download3',
		},
		{
			to: '/recurring-payments',
			value: 'Recurring payments',
			icon: 'icon-credit-card',
		},
		{
			to: '/reward-points',
			value: 'Reward Points',
			icon: 'icon-trophy',
		},
		{
			to: '/returns',
			value: 'Returns',
			icon: 'icon-undo',
		},
		{
			to: '/transactions',
			value: 'Transactions',
			icon: 'icon-tab',
		},
		{
			to: '/newsletter',
			value: 'Newsletter',
			icon: 'icon-mail4',
		},
	],
};
