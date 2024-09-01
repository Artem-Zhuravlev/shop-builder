'use client';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminLanguagesForm: FC = () => {
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
							title={t('base.languages')}
						>
							<InputText
								className='col-md-4'
								name='language_name'
								placeholder={t('inputs.language_name')}
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
								name='locale'
								placeholder={t('inputs.locale')}
								required
							/>
							<InputText
								className='col-md-4'
								type='number'
								name='sort_order'
								placeholder={t('inputs.sort_order')}
								required
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

AdminLanguagesForm.displayName = 'AdminLanguagesForm';
