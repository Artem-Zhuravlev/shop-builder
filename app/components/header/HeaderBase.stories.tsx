import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeaderBase } from './HeaderBase';

export default {
  title: 'Header',
  component: HeaderBase,
} as Meta<typeof HeaderBase>;

const Template: StoryFn<typeof HeaderBase> = (args) => <HeaderBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'About us',
      url: '/about'
    },
    {
      name: 'Delivery',
      url: '/delivery'
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
              url: '/sports-wear'
            },
            {
              name: 'Top wear',
              url: '/top-wear'
            }
          ]
        },
        {
          title: 'Women',
          subMenu: [
            {
              name: 'Sports wear',
              url: '/sports-wear'
            },
            {
              name: 'Top wear',
              url: '/top-wear'
            }
          ]
        }
      ]
    },
    {
      name: 'Contacts',
      url: '/contacts'
    },
    {
      name: 'News',
      url: '/news'
    }
  ],
  phones: [
    '+3808005553535',
    '+3808005553536',
  ],
  cartTotal: 20
};
