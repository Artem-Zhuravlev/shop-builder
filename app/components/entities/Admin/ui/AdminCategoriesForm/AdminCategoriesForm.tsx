import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import { AdminCategoriesGeneralForm } from './common';

export const AdminCategoriesForm: FC = () => {
	const t = useTranslations('base');

	const items = [
		{
			label: t('general'),
			description: <AdminCategoriesGeneralForm />,
		},
		{
			label: t('data'),
			description: 'Tab 2 description (2)',
		},
		{
			label: t('seo'),
			description: 'Tab 3 description (3)',
		},
		{
			label: t('design'),
			description: 'Tab 3 description (3)',
		},
	];

	return <TabsBase items={items} />;
};
