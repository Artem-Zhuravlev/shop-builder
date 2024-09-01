import type { Meta, StoryFn } from '@storybook/react';
import { BlogHeader } from './BlogHeader';

export default {
  title: 'Entities/Blog/BlogHeader',
  component: BlogHeader,
} as Meta<typeof BlogHeader>;

const Template: StoryFn<typeof BlogHeader> = (args) => {
  return <BlogHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Blog Header',
  slug: 'john-doe',
  author: 'John Doe',
  publishedAt: '2023-07-20',
  comments: 50,
  viewed: 50,
};
