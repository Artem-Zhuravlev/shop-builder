import type { Meta, StoryFn } from '@storybook/react';
import { AdminZonesFilter } from './AdminZonesFilter';

export default {
	title: 'Entities/Admin/Zones/AdminZonesFilter',
	component: AdminZonesFilter,
} as Meta<typeof AdminZonesFilter>;

const Template: StoryFn<typeof AdminZonesFilter> = (args) => {
	return <AdminZonesFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
