import { Meta, StoryFn } from '@storybook/react';
import { AccountChangePasswordForm } from './AccountChangePasswordForm';

export default {
  title: 'Entities/Account/AccountChangePasswordForm',
  component: AccountChangePasswordForm,
} as Meta<typeof AccountChangePasswordForm>;

const Template: StoryFn<typeof AccountChangePasswordForm> = (args) => {
  return <AccountChangePasswordForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
