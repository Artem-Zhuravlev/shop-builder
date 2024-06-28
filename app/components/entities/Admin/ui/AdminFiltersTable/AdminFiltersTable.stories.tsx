import { Meta, StoryFn } from '@storybook/react';
import { AdminFiltersTable } from './AdminFiltersTable';

export default {
  title: 'Entities/Admin/Filters/AdminFiltersTable',
  component: AdminFiltersTable,
} as Meta<typeof AdminFiltersTable>;

const Template: StoryFn<typeof AdminFiltersTable> = (args) => {
  return <AdminFiltersTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 2,
      sort_order: 2,
      filter_group: 'Color',
      slug: 'red',
    },
    {
      id: 3,
      sort_order: 3,
      filter_group: 'Color',
      slug: 'blue',
    },
    {
      id: 4,
      sort_order: 4,
      filter_group: 'Color',
      slug: 'green',
    },
    {
      id: 5,
      sort_order: 5,
      filter_group: 'Color',
      slug: 'yellow',
    },
    {
      id: 6,
      sort_order: 6,
      filter_group: 'Color',
      slug: 'orange',
    },
    {
      id: 7,
      sort_order: 7,
      filter_group: 'Color',
      slug: 'purple',
    },
    {
      id: 8,
      sort_order: 8,
      filter_group: 'Color',
      slug: 'black',
    },
    {
      id: 9,
      sort_order: 9,
      filter_group: 'Color',
      slug: 'white',
    },
    {
      id: 10,
      sort_order: 10,
      filter_group: 'Color',
      slug: 'pink',
    },
    {
      id: 11,
      sort_order: 11,
      filter_group: 'Color',
      slug: 'grey',
    },
  ],
};
