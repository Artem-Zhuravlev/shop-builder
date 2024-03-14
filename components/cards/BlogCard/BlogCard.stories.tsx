import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BlogCard } from './BlogCard';

export default {
  title: 'Cards/BlogCard',
  component: BlogCard,
} as Meta<typeof BlogCard>;

const Template: StoryFn<typeof BlogCard> = (args) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <BlogCard {...args} />
    </div>
  )
}

export const Default = Template.bind({});
Default.args = {
  to: '/blog',
  item: {
    image: 'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
    author: 'John Doe',
    comments: 50,
    viewed: 50,
    title: 'This revision focuses on checking the presence of specific elements or text within',
    published_at: '2023-07-20'
  }
};
