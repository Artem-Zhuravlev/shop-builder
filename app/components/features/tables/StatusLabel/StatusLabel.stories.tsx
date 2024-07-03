import { Meta, StoryFn } from '@storybook/react';
import { StatusLabel } from './StatusLabel';

export default {
  title: 'Features/Tables/StatusLabel',
  component: StatusLabel,
} as Meta<typeof StatusLabel>;

const Template: StoryFn<typeof StatusLabel> = (args) => {
  return <StatusLabel {...args} />;
};

export const Pending = Template.bind({});
Pending.args = {
  value: 'pending',
};
export const Cancelled = Template.bind({});
Cancelled.args = {
  value: 'cancelled',
};
export const Delivered = Template.bind({});
Delivered.args = {
  value: 'delivered',
};
export const Processing = Template.bind({});
Processing.args = {
  value: 'processing',
};
export const Shipped = Template.bind({});
Shipped.args = {
  value: 'shipped',
};
