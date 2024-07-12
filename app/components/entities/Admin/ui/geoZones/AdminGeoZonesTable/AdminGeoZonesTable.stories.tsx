import type { Meta, StoryFn } from '@storybook/react';
import { AdminGeoZonesTable } from './AdminGeoZonesTable';

export default {
	title: 'Entities/Admin/Geo Zones/AdminGeoZonesTable',
	component: AdminGeoZonesTable,
} as Meta<typeof AdminGeoZonesTable>;

const Template: StoryFn<typeof AdminGeoZonesTable> = (args) => {
	return <AdminGeoZonesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			geo_zone_name: 'English',
			description: 'English language',
			slug: 'english',
		},
		{
			id: 2,
			geo_zone_name: 'Ukrainian',
			description: 'Ukrainian language',
			slug: 'ukrainian',
		},
	],
};
