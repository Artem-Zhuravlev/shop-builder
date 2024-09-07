'use client';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import {
	AdminSettingsGeneralForm,
	AdminSettingsStoreForm,
	AdminSettingsLocalForm,
	AdminSettingsOptionForm,
	AdminSettingsImageForm,
} from './common';
import { AdminSettingsMailForm } from './common/AdminSettingsMailForm';
import { StepForm } from '@/components/features/forms';
import {
	createApiSettings,
	updateApiSettings,
} from '@/components/shared/api/admin';
import type { SettingsInterface } from '@interfaces/settings';

interface AdminSettingsFormProps {
	id: number | string;
	initialValues: object | null;
}

export const AdminSettingsForm: FC<AdminSettingsFormProps> = ({
	id,
	initialValues,
}) => {
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

	const onSubmit = async (values: SettingsInterface) => {
		try {
			if (id === 'new') {
				await createApiSettings(values);
				return;
			}

			await updateApiSettings(Number(id), values);
		} catch (error) {
			console.error(
				'Error during API call:',
				error instanceof Error ? error.message : 'Unknown error',
			);
		}
	};

	return (
		<StepForm tabs={tabs} onSubmit={onSubmit} initialValues={initialValues} />
	);
};

AdminSettingsForm.displayName = 'AdminSettingsForm';
