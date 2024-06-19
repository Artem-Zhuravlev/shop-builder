import { Meta, StoryFn } from '@storybook/react';
import { AccountAddressForm } from './AccountAddressForm';

export default {
  title: 'Entities/Account/AccountAddressForm',
  component: AccountAddressForm,
} as Meta<typeof AccountAddressForm>;

const Template: StoryFn<typeof AccountAddressForm> = (args) => {
  return <AccountAddressForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
