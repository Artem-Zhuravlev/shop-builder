import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import {
	AdminSettingsGeneralForm,
	AdminSettingsStoreForm,
	AdminSettingsLocalForm,
} from './common';

export const AdminSettingsForm: FC = () => {
	const t = useTranslations('base');

	const tabs = [
		{
			label: t('general'),
			description: <AdminSettingsGeneralForm />,
		},
		{
			label: t('store'),
			description: <AdminSettingsStoreForm />,
		},
		{
			label: t('local'),
			description: <AdminSettingsLocalForm />,
		},
	];

	return <TabsBase items={tabs} />;
};

AdminSettingsForm.displayName = 'AdminSettingsForm';
