import { Meta, StoryFn } from '@storybook/react';
import { AccountNav } from './AccountNav';

export default {
  title: 'Entities/Account/AccountNav',
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
      value: 'login',
      icon: 'icon-enter',
    },
    {
      to: '/register',
      value: 'register',
      icon: 'icon-user-plus',
    },
    {
      to: '/forgotten-password',
      value: 'forgotten_password',
      icon: 'icon-key',
    },
    {
      to: '/account',
      value: 'my_account',
      icon: 'icon-user',
    },
    {
      to: '/address-book',
      value: 'address_book',
      icon: 'icon-address-book',
    },
    {
      to: '/wish-list',
      value: 'whish_list',
      icon: 'icon-heart',
    },
    {
      to: '/notification',
      value: 'notification',
      icon: 'icon-bell',
    },
    {
      to: '/order-history',
      value: 'order_history',
      icon: 'icon-gift',
    },
    {
      to: '/downloads',
      value: 'downloads',
      icon: 'icon-download3',
    },
    {
      to: '/recurring-payments',
      value: 'recurring_payments',
      icon: 'icon-credit-card',
    },
    {
      to: '/reward-points',
      value: 'reward_points',
      icon: 'icon-trophy',
    },
    {
      to: '/returns',
      value: 'returns',
      icon: 'icon-undo',
    },
    {
      to: '/transactions',
      value: 'transactions',
      icon: 'icon-tab',
    },
    {
      to: '/newsletter',
      value: 'newsletter',
      icon: 'icon-mail4',
    },
  ],
};
