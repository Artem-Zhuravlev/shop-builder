import type { Meta, StoryFn } from '@storybook/react';
import { CommentForm } from './CommentForm';

export default {
  title: 'Entities/Comments/CommentForm',
  component: CommentForm,
} as Meta<typeof CommentForm>;

const Template: StoryFn<typeof CommentForm> = (args) => {
  return <CommentForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
