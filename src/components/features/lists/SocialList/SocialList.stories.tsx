import type { Meta, StoryFn } from '@storybook/react';
import { SocialList } from './SocialList';

export default {
  title: 'Features/Lists/SocialList',
  component: SocialList,
} as Meta<typeof SocialList>;

const Template: StoryFn<typeof SocialList> = (args) => <SocialList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      url: '/youtube',
      icon: 'youtube',
    },
    {
      url: '/facebook',
      icon: 'facebook',
    },
    {
      url: '/instagram',
      icon: 'instagram',
    },
  ],
};
