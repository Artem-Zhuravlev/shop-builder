'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, type FC } from 'react';
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
	getSettings,
	selectSettings,
	updateSettings,
	useDispatch,
	useSelector,
} from '@/lib/redux';
import type { SettingsInterface } from '@interfaces/settings';

// interface AdminSettingsFormProps {
// 	initialValues?: object | null;
// }

export const AdminSettingsForm: FC = () => {
	const t = useTranslations('base');

	const dispatch = useDispatch();
	const initialValues = useSelector(selectSettings);

	useEffect(() => {
		dispatch(getSettings());
	}, [dispatch]);

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
			await dispatch(updateSettings(values));
		} catch (error) {
			console.error(
				'Error during API call:',
				error instanceof Error ? error.message : 'Unknown error',
			);
		}
	};

	return (
		<StepForm
			tabs={tabs}
			onSubmit={onSubmit}
			initialValues={initialValues}
			showCancelBtn={false}
		/>
	);
};

AdminSettingsForm.displayName = 'AdminSettingsForm';
