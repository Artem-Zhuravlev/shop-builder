import type { Meta, StoryFn } from '@storybook/react';
import { AdminReviewsFilter } from './AdminReviewsFilter';

export default {
  title: 'Entities/Admin/Reviews/AdminReviewsFilter',
  component: AdminReviewsFilter,
} as Meta<typeof AdminReviewsFilter>;

const Template: StoryFn<typeof AdminReviewsFilter> = (args) => {
  return <AdminReviewsFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
