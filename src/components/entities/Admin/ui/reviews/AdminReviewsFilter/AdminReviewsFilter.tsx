'use client';
import { ButtonBase } from '@/components/shared/ButtonBase';
import {
	InputDatePicker,
	InputSelect,
	InputText,
} from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminReviewsFilter: FC = () => {
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
							<InputText name='product' placeholder={t('inputs.product')} />
							<InputText name='author' placeholder={t('inputs.author')} />
							<InputSelect
								name='status'
								placeholder={t('inputs.status')}
								options={[
									{ value: 'disabled', label: 'Disabled' },
									{ value: 'enabled', label: 'Enabled' },
								]}
							/>
							<InputDatePicker
								name='date_added'
								placeholder={t('inputs.date_added')}
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

AdminReviewsFilter.displayName = 'AdminReviewsFilter';
