'use client';
import { InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminStockStatusForm: FC = () => {
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
							title={t('base.stock_statuses')}
						>
							<InputText
								className='col-md-4'
								name='stock_status_name'
								placeholder={t('inputs.stock_status_name')}
								required
							/>
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminStockStatusForm.displayName = 'AdminStockStatusForm';
