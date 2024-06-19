import { Meta, StoryFn } from '@storybook/react';
import { PaginateBase } from './PaginateBase';

export default {
  title: 'Shared/PaginateBase',
  component: PaginateBase,
  argTypes: {
    onClick: { action: 'clicked' },
    onPageChange: { action: 'pageChanged' },
  },
} as Meta<typeof PaginateBase>;

const Template: StoryFn<typeof PaginateBase> = (args) => (
  <PaginateBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageCount: 20,
};
