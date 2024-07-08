import type { Meta, StoryFn } from '@storybook/react';
import { AdminAttributeGroupTable } from './AdminAttributeGroupTable';

export default {
  title: 'Entities/Admin/Attributes/AdminAttributeGroupTable',
  component: AdminAttributeGroupTable,
} as Meta<typeof AdminAttributeGroupTable>;

const Template: StoryFn<typeof AdminAttributeGroupTable> = (args) => {
  return <AdminAttributeGroupTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 1,
      attribute_group_name: 'Memory',
      sort_order: 2,
      slug: 'memory',
    },
    {
      id: 2,
      attribute_group_name: 'Motherboard',
      sort_order: 3,
      slug: 'motherboard',
    },
    {
      id: 3,
      attribute_group_name: 'Processor',
      sort_order: 4,
      slug: 'processor',
    },
    {
      id: 4,
      attribute_group_name: 'Technical',
      sort_order: 1,
      slug: 'technical',
    },
  ],
};
