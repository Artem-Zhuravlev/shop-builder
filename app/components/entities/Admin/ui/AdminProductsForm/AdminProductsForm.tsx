import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import { AdminProductsGeneralForm, AdminProductsDataForm } from './common';

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
	];

	return <TabsBase items={tabs} />;
};

AdminProductsForm.displayName = 'AdminProductsForm';
