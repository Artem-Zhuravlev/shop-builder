'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCountriesFilter: FC = () => {
	const t = useTranslations();
	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<h3 className='h2'>{t('base.filter')}</h3>
							<InputText
								name='country_name'
								placeholder={t('admin.country_name')}
							/>
							<InputText
								name='iso_code_2'
								placeholder={t('admin.iso_code_2')}
							/>
							<InputText
								name='iso_code_3'
								placeholder={t('admin.iso_code_3')}
							/>
							<ButtonBase type='submit'>
								<span className='icon-filter' />
								{t('base.filter')}
							</ButtonBase>
						</form>
					);
				}}
			/>
		</div>
	);
};

AdminCountriesFilter.displayName = 'AdminCountriesFilter';
