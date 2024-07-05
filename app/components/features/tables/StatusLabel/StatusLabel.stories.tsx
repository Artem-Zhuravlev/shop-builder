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
export const CancelledReversal = Template.bind({});
CancelledReversal.args = {
  value: 'canceled_reversal',
};
export const Chargeback = Template.bind({});
Chargeback.args = {
  value: 'chargeback',
};
export const Denied = Template.bind({});
Denied.args = {
  value: 'denied',
};
export const Expired = Template.bind({});
Expired.args = {
  value: 'expired',
};
export const Failed = Template.bind({});
Failed.args = {
  value: 'failed',
};
export const Complete = Template.bind({});
Complete.args = {
  value: 'complete',
};
export const Delivered = Template.bind({});
Delivered.args = {
  value: 'delivered',
};
export const Processing = Template.bind({});
Processing.args = {
  value: 'processing',
};
export const Processed = Template.bind({});
Processed.args = {
  value: 'processed',
};
export const Refunded = Template.bind({});
Refunded.args = {
  value: 'refunded',
};
export const Shipped = Template.bind({});
Shipped.args = {
  value: 'shipped',
};
export const Voided = Template.bind({});
Voided.args = {
  value: 'voided',
};
