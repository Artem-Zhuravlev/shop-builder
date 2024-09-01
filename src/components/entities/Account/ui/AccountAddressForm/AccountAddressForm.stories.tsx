import type { Meta, StoryFn } from '@storybook/react';
import { AccountAddressForm } from './AccountAddressForm';

export default {
	title: 'Entities/Account/AccountAddressForm',
	component: AccountAddressForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AccountAddressForm>;

const Template: StoryFn<typeof AccountAddressForm> = (args) => {
	return <AccountAddressForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
