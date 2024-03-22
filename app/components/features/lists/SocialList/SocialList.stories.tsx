import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SocialList } from './SocialList';

export default {
  title: 'Lists/SocialList',
  component: SocialList,
} as Meta<typeof SocialList>;

const Template: StoryFn<typeof SocialList> = (args) => <SocialList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      url: '/youtube',
      icon: 'youtube'
    },
    {
      url: '/facebook',
      icon: 'facebook'
    },
    {
      url: '/instagram',
      icon: 'instagram'
    }
  ]
};
