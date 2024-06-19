import { Meta, StoryFn } from '@storybook/react';
import { TheHeader } from './TheHeader';

export default {
  title: 'Widgets/TheHeader',
  component: TheHeader,
  argTypes: {
    handleCompare: { action: 'compare' },
    handleWishlist: { action: 'wishlist' },
    handleAddToCart: { action: 'add to cart' },
  },
} as Meta<typeof TheHeader>;

const Template: StoryFn<typeof TheHeader> = (args) => <TheHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'About us',
      url: '/about',
    },
    {
      name: 'Delivery',
      url: '/delivery',
    },
    {
      name: 'Mega menu',
      url: '/menu',
      sub: [
        {
          title: 'Men',
          subMenu: [
            {
              name: 'Sports wear',
              url: '/sports-wear',
            },
            {
              name: 'Top wear',
              url: '/top-wear',
            },
          ],
        },
        {
          title: 'Women',
          subMenu: [
            {
              name: 'Sports wear',
              url: '/sports-wear',
            },
            {
              name: 'Top wear',
              url: '/top-wear',
            },
          ],
        },
      ],
    },
    {
      name: 'Contacts',
      url: '/contacts',
    },
    {
      name: 'News',
      url: '/news',
    },
  ],
  phones: ['+3808005553535', '+3808005553536'],
  cartTotal: 20,
};
