'use client';
import {
	InputImage,
	InputText,
	InputTextarea,
} from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminSettingsGeneralForm: FC = () => {
	const t = useTranslations();

	return (
		<div className='row align-items-center'>
			<InputText
				name='meta_title'
				placeholder={t('inputs.meta_title')}
				required
			/>
			<InputTextarea
				name='meta_description'
				placeholder={t('inputs.meta_description')}
			/>
			<InputTextarea
				name='meta_keywords'
				placeholder={t('inputs.meta_keywords')}
			/>
			<InputImage name='logo' />
		</div>
	);
};

AdminSettingsGeneralForm.displayName = 'AdminSettingsGeneralForm';
