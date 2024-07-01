import { Meta, StoryFn } from '@storybook/react';
import { AdminManufacturersForm } from './AdminManufacturersForm';

export default {
  title: 'Entities/Admin/Manufacturers/AdminManufacturersForm',
  component: AdminManufacturersForm,
} as Meta<typeof AdminManufacturersForm>;

const Template: StoryFn<typeof AdminManufacturersForm> = (args) => {
  return <AdminManufacturersForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
