import type { Meta, StoryFn } from '@storybook/react';
import { AdminSidebar } from './AdminSidebar';

export default {
  title: 'Entities/Admin/Widgets/AdminSidebar',
  component: AdminSidebar,
} as Meta<typeof AdminSidebar>;

const Template: StoryFn<typeof AdminSidebar> = (args) => {
  return (
    <div style={{ maxWidth: 235 }}>
      <AdminSidebar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
