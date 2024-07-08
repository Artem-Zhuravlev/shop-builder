import type { Meta, StoryFn } from '@storybook/react';
import { AdminInformationTable } from './AdminInformationTable';

export default {
  title: 'Entities/Admin/Information/AdminInformationTable',
  component: AdminInformationTable,
} as Meta<typeof AdminInformationTable>;

const Template: StoryFn<typeof AdminInformationTable> = (args) => {
  return <AdminInformationTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 1,
      title: 'About Us',
      sort_order: 1,
      slug: 'about',
    },
    {
      id: 2,
      title: 'Delivery Information',
      sort_order: 2,
      slug: 'delivery',
    },
    {
      id: 3,
      title: 'Privacy Policy',
      sort_order: 3,
      slug: 'privacy',
    },
    {
      id: 4,
      title: 'Terms & Conditions',
      sort_order: 4,
      slug: 'terms',
    },
  ],
};
