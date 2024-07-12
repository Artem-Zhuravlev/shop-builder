import type { Meta, StoryFn } from '@storybook/react';
import { AdminCountriesTable } from './AdminCountriesTable';

export default {
	title: 'Entities/Admin/Countries/AdminCountriesTable',
	component: AdminCountriesTable,
} as Meta<typeof AdminCountriesTable>;

const Template: StoryFn<typeof AdminCountriesTable> = (args) => {
	return <AdminCountriesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			country_name: 'United States',
			iso_code_2: 'US',
			iso_code_3: 'USA',
			slug: 'united-states',
		},
		{
			id: 2,
			country_name: 'Canada',
			iso_code_2: 'CA',
			iso_code_3: 'CAN',
			slug: 'canada',
		},
		{
			id: 3,
			country_name: 'United Kingdom',
			iso_code_2: 'GB',
			iso_code_3: 'GBR',
			slug: 'united-kingdom',
		},
		{
			id: 4,
			country_name: 'Australia',
			iso_code_2: 'AU',
			iso_code_3: 'AUS',
			slug: 'australia',
		},
		{
			id: 5,
			country_name: 'New Zealand',
			iso_code_2: 'NZ',
			iso_code_3: 'NZL',
			slug: 'new-zealand',
		},
	],
};
