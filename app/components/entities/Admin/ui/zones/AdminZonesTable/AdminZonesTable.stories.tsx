import type { Meta, StoryFn } from '@storybook/react';
import { AdminZonesTable } from './AdminZonesTable';

export default {
	title: 'Entities/Admin/Zones/AdminZonesTable',
	component: AdminZonesTable,
} as Meta<typeof AdminZonesTable>;

const Template: StoryFn<typeof AdminZonesTable> = (args) => {
	return <AdminZonesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			country: 'United Kingdom',
			zone_name: 'London',
			zone_code: 'GB-LND',
			slug: 'london',
		},
		{
			id: 2,
			country: 'Afghanistan',
			zone_name: 'Parwan',
			zone_code: 'AF-PAR',
			slug: 'parwan',
		},
		{
			id: 3,
			country: 'Afghanistan',
			zone_name: 'Kabul',
			zone_code: 'AF-KBL',
			slug: 'kabul',
		},
	],
};
