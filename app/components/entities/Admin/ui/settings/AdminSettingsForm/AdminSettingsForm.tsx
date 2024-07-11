import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import {
	AdminSettingsGeneralForm,
	AdminSettingsStoreForm,
	AdminSettingsLocalForm,
	AdminSettingsOptionForm,
	AdminSettingsImageForm,
} from './common';
import { AdminSettingsMailForm } from './common/AdminSettingsMailForm';

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
		{
			label: t('option'),
			description: <AdminSettingsOptionForm />,
		},
		{
			label: t('image'),
			description: <AdminSettingsImageForm />,
		},
		{
			label: t('mail'),
			description: <AdminSettingsMailForm />,
		},
	];

	return <TabsBase items={tabs} />;
};

AdminSettingsForm.displayName = 'AdminSettingsForm';
