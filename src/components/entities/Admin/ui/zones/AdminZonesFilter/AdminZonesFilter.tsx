'use client';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { InputText } from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminZonesFilter: FC = () => {
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
							<InputText name='country' placeholder={t('admin.country')} />
							<InputText name='zone_name' placeholder={t('admin.zone_name')} />
							<InputText name='zone_code' placeholder={t('admin.zone_code')} />
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

AdminZonesFilter.displayName = 'AdminZonesFilter';
