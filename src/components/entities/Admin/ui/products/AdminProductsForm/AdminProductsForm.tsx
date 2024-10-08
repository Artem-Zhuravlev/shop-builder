import { TabsBase } from '@/components/shared/TabsBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import {
	AdminProductsDataForm,
	AdminProductsDiscountForm,
	AdminProductsGeneralForm,
	AdminProductsImageForm,
	AdminProductsLinksForm,
	AdminProductsOptionsForm,
	AdminProductsRecurringForm,
	AdminProductsRewardPointsForm,
	AdminProductsSeoForm,
	AdminProductsSpecialForm,
} from './common';

export const AdminProductsForm: FC = () => {
	const t = useTranslations('base');

	const tabs = [
		{
			label: t('general'),
			description: <AdminProductsGeneralForm />,
		},
		{
			label: t('data'),
			description: <AdminProductsDataForm />,
		},
		{
			label: t('links'),
			description: <AdminProductsLinksForm />,
		},
		{
			label: t('option'),
			description: <AdminProductsOptionsForm />,
		},
		{
			label: t('recurring'),
			description: <AdminProductsRecurringForm />,
		},
		{
			label: t('discount'),
			description: <AdminProductsDiscountForm />,
		},
		{
			label: t('special'),
			description: <AdminProductsSpecialForm />,
		},
		{
			label: t('image'),
			description: <AdminProductsImageForm />,
		},
		{
			label: t('reward_points'),
			description: <AdminProductsRewardPointsForm />,
		},
		{
			label: t('seo'),
			description: <AdminProductsSeoForm />,
		},
	];

	return (
		<div className='form-holder'>
			<TabsBase items={tabs} />
		</div>
	);
};

AdminProductsForm.displayName = 'AdminProductsForm';
