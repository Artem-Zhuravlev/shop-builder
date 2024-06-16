import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import {
	AdminCategoriesGeneralForm,
	AdminCategoriesDataForm,
	AdminCategoriesSeoForm,
} from './common';

export const AdminCategoriesForm: FC = () => {
	const t = useTranslations('base');

	const tabs = [
		{
			label: t('general'),
			description: <AdminCategoriesGeneralForm />,
		},
		{
			label: t('data'),
			description: <AdminCategoriesDataForm />,
		},
		{
			label: t('seo'),
			description: <AdminCategoriesSeoForm />,
		},
		{
			label: t('design'),
			description: 'Tab 3 description (3)',
		},
	];

	return <TabsBase items={tabs} />;
};

AdminCategoriesForm.displayName = 'AdminCategoriesForm';
