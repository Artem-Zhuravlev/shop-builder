import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import {
	AdminCountriesTable,
	AdminCountriesFilter,
} from '@entities/Admin/ui/countries';
import { PaginateBase } from '@shared/PaginateBase';

export default function ReturnsPage() {
	const nodes = [
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
	];

	return (
		<AdminTableLayout filter={<AdminCountriesFilter />}>
			<AdminCountriesTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Countries',
};
