'use client';
import {
	InputImage,
	InputText,
	InputTextarea,
} from '@/components/shared/inputs';
import { emailValidate, phoneValidate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminSettingsStoreForm: FC = () => {
	const t = useTranslations();

	return (
		<div className='row align-items-center'>
			<InputText
				className='col-md-4'
				name='store_name'
				placeholder={t('inputs.store_name')}
				required
			/>
			<InputText
				className='col-md-4'
				name='store_owner'
				placeholder={t('inputs.store_owner')}
				required
			/>
			<InputText
				className='col-md-4'
				name='geocode'
				placeholder={t('inputs.geocode')}
			/>
			<InputText
				className='col-md-4'
				name='email'
				placeholder={t('inputs.email')}
				validationHandler={emailValidate}
				required
			/>
			<InputText
				className='col-md-4'
				name='phone'
				placeholder={t('inputs.phone')}
				validationHandler={phoneValidate}
				required
			/>
			<InputTextarea name='address' placeholder={t('inputs.address')} />
			<InputImage name='image' />
			<InputTextarea
				name='opening_times'
				placeholder={t('inputs.opening_times')}
			/>
			<InputTextarea name='comment' placeholder={t('inputs.comment')} />
		</div>
	);
};

AdminSettingsStoreForm.displayName = 'AdminSettingsStoreForm';
