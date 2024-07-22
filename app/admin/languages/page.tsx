import React from 'react';
import { AdminLanguagesTable } from '@entities/Admin/ui/languages';

export default function LanguagesPage() {
	const nodes = [
		{
			id: 1,
			sort_order: 1,
			language_name: 'English',
			code: 'en-gb',
			slug: 'english',
		},
		{
			id: 2,
			sort_order: 2,
			language_name: 'Spanish',
			code: 'es-es',
			slug: 'spanish',
		},
		{
			id: 3,
			sort_order: 3,
			language_name: 'French',
			code: 'fr-fr',
			slug: 'french',
		},
		{
			id: 4,
			sort_order: 4,
			language_name: 'German',
			code: 'de-de',
			slug: 'german',
		},
		{
			id: 5,
			sort_order: 5,
			language_name: 'Italian',
			code: 'it-it',
			slug: 'italian',
		},
	];

	return <AdminLanguagesTable nodes={nodes} />;
}

export const metadata = {
	title: 'Languages',
};