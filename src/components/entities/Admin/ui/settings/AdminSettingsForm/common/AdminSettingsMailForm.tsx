'use client';
import {
	InputPassword,
	InputSelect,
	InputText,
	InputTextarea,
} from '@/components/shared/inputs';
import { passwordValidate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminSettingsMailForm: FC = () => {
	const t = useTranslations();

	return (
		<div className='row align-items-center'>
			<h3 className='h4'>{t('base.general')}</h3>
			<InputSelect
				className='col-md-4'
				name='mail_engine'
				placeholder={t('inputs.mail_engine')}
				options={[
					{ value: 'none', label: t('inputs.none') },
					{ value: 'mail', label: 'Mail' },
					{ value: 'smtp', label: 'SMTP' },
				]}
			/>
			<InputText
				className='col-md-4'
				name='mail_parameters'
				placeholder={t('inputs.mail_parameters')}
			/>
			<h3 className='h4'>SMTP</h3>
			<InputText
				className='col-md-4'
				name='hostname'
				placeholder={t('inputs.hostname')}
			/>
			<InputText
				className='col-md-4'
				name='username'
				placeholder={t('inputs.username')}
			/>
			<InputPassword
				className='col-md-4'
				name='password'
				placeholder={t('inputs.password')}
				validationHandler={passwordValidate}
			/>
			<InputText
				type='number'
				className='col-md-4'
				name='port'
				placeholder={t('inputs.port')}
			/>
			<InputText
				type='number'
				className='col-md-4'
				name='timeout'
				placeholder={t('inputs.timeout')}
			/>
			<h3 className='h4'>{t('base.mail_alerts')}</h3>
			<InputSelect
				className='col-md-4'
				name='alert_mail'
				placeholder={t('inputs.alert_mail')}
				isMulti
				options={[
					{ value: 'register', label: t('inputs.register') },
					{ value: 'affiliate', label: t('inputs.affiliate') },
					{ value: 'orders', label: t('inputs.orders') },
					{ value: 'reviews', label: t('inputs.reviews') },
				]}
			/>
			<InputTextarea
				className='col-md-4'
				name='additional_alert_mail'
				placeholder={t('inputs.additional_alert_mail')}
			/>
		</div>
	);
};

AdminSettingsMailForm.displayName = 'AdminSettingsMailForm';
