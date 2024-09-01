'use client';
import { TabsBase } from '@/components/shared/TabsBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import {
	AdminCategoriesDataForm,
	AdminCategoriesGeneralForm,
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
	];

	return (
		<div className='form-holder'>
			<TabsBase items={tabs} />
		</div>
	);
};

AdminCategoriesForm.displayName = 'AdminCategoriesForm';
