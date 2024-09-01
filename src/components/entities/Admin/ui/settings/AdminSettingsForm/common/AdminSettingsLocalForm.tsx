'use client';
import {
	InputCheckbox,
	InputCountry,
	InputCurrency,
	InputLanguage,
	InputLength,
	InputSelect,
	InputTimezone,
	InputWeight,
} from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminSettingsLocalForm: FC = () => {
	const t = useTranslations();

	return (
		<div className='row align-items-center'>
			<InputCountry className='col-md-4' name='country' />
			<InputSelect
				className='col-md-4'
				name='region'
				placeholder={t('inputs.region')}
				options={[]}
			/>
			<InputTimezone className='col-md-4' name='time_zone' />
			<InputLanguage className='col-md-4' name='language' />
			<InputLanguage
				className='col-md-4'
				name='administration_language'
				placeholder={t('inputs.administration_language')}
			/>
			<InputLength className='col-md-4' name='length_class' />
			<InputWeight className='col-md-4' name='weight_class' />
			<InputCurrency className='col-md-4' name='currency' />
			<InputSelect
				className='col-md-4'
				name='currency_rate_engine'
				placeholder={t('inputs.currency_rate_engine')}
				options={[
					{
						value: 'european_central_bank_currency_converter',
						label: t('admin.european_central_bank_currency_converter'),
					},
				]}
			/>
			<InputCheckbox
				name='auto_update_currency'
				label={t('inputs.auto_update_currency')}
			/>
		</div>
	);
};

AdminSettingsLocalForm.displayName = 'AdminSettingsLocalForm';
