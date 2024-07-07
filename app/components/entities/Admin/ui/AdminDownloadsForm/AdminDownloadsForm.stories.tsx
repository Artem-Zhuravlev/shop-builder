import type { Meta, StoryFn } from '@storybook/react';
import { AdminDownloadsForm } from './AdminDownloadsForm';

export default {
  title: 'Entities/Admin/Downloads/AdminDownloadsForm',
  component: AdminDownloadsForm,
} as Meta<typeof AdminDownloadsForm>;

const Template: StoryFn<typeof AdminDownloadsForm> = (args) => {
  return <AdminDownloadsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
