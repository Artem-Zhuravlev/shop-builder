import { Meta, StoryFn } from '@storybook/react';
import { AccountRegisterForm } from './AccountRegisterForm';

export default {
  title: 'Entities/Account/AccountRegisterForm',
  component: AccountRegisterForm,
} as Meta<typeof AccountRegisterForm>;

const Template: StoryFn<typeof AccountRegisterForm> = (args) => {
  return <AccountRegisterForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
