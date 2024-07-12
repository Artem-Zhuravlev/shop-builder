import type { Meta, StoryFn } from '@storybook/react';
import { AdminZonesForm } from './AdminZonesForm';

export default {
	title: 'Entities/Admin/Zones/AdminZonesForm',
	component: AdminZonesForm,
} as Meta<typeof AdminZonesForm>;

const Template: StoryFn<typeof AdminZonesForm> = (args) => {
	return <AdminZonesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
