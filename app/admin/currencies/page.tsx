import React from 'react';
import {
	AdminCurrencyTable,
	type AdminCurrencyTableItem,
} from '@entities/Admin/ui/currencies';

export default function CurrenciesPage() {
	const nodes: AdminCurrencyTableItem[] = [
		{
			id: 1,
			currency_title: 'Australian Dollar',
			code: 'AUD',
			value: 0.68,
			status: 'disabled',
			date_added: '2022-01-01',
			slug: 'australian-dollars',
		},
		{
			id: 2,
			currency_title: 'Canadian Dollar',
			code: 'CAD',
			value: 0.73,
			status: 'enabled',
			date_added: '2022-01-01',
			slug: 'canadian-dollars',
		},
		{
			id: 3,
			currency_title: 'Euro',
			code: 'EUR',
			value: 0.89,
			status: 'enabled',
			date_added: '2022-01-01',
			slug: 'euros',
		},
		{
			id: 4,
			currency_title: 'United States Dollar',
			code: 'USD',
			value: 1,
			status: 'disabled',
			date_added: '2022-01-01',
			slug: 'united-states-dollars',
		},
	];

	return <AdminCurrencyTable nodes={nodes} />;
}

export const metadata = {
	title: 'Currencies',
};