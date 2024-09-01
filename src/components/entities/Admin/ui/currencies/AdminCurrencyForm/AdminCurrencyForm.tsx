'use client';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCurrencyForm: FC = () => {
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
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('base.currency')}
						>
							<InputText
								className='col-md-4'
								name='currency_title'
								placeholder={t('inputs.currency_title')}
								required
							/>
							<InputText
								className='col-md-4'
								name='code'
								placeholder={t('inputs.code')}
								required
							/>
							<InputText
								className='col-md-4'
								name='symbol'
								placeholder={t('inputs.symbol')}
							/>
							<InputText
								type='number'
								className='col-md-4'
								name='decimal_places'
								placeholder={t('inputs.decimal_places')}
							/>
							<InputText
								type='number'
								className='col-md-4'
								name='value'
								placeholder={t('inputs.value')}
							/>
							<InputCheckbox
								className='col-md-4'
								name='status'
								label={t('inputs.status')}
							/>
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminCurrencyForm.displayName = 'AdminCurrencyForm';
