'use client';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { InputText } from '@/components/shared/inputs';
import type { CountriesInterface } from '@interfaces/index';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

interface AdminCountriesFilterProps {
	onFilter: (value: CountriesInterface) => void;
}

export const AdminCountriesFilter: FC<AdminCountriesFilterProps> = ({
	onFilter,
}) => {
	const t = useTranslations();
	const handleSubmit = (value: CountriesInterface) => {
		onFilter(value);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={handleSubmit}
				render={({ handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<h3 className='h2'>{t('base.filter')}</h3>
							<InputText name='country' placeholder={t('admin.country_name')} />
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
