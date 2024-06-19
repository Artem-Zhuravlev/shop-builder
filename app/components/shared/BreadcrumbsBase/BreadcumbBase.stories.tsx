import { Meta, StoryFn } from '@storybook/react';
import { BreadcrumbsBase } from './BreadcrumbsBase';

export default {
  title: 'Shared/BreadcrumbsBase',
  component: BreadcrumbsBase,
  argTypes: {
    onClick: { action: 'clicked' },
    onPageChange: { action: 'pageChanged' },
  },
} as Meta<typeof BreadcrumbsBase>;

const Template: StoryFn<typeof BreadcrumbsBase> = (args) => (
  <BreadcrumbsBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pages: [
    { label: 'Home', url: '/' },
    { label: 'Category', url: '/category' },
    { label: 'Subcategory' },
  ],
};
