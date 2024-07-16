'use client';
import {
	InputDatePicker,
	InputRadio,
	InputRadioGroup,
	InputSelect,
	InputText,
	InputTextarea,
} from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminReviewsForm: FC = () => {
	const t = useTranslations();
	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.reviews')}
					>
						<InputText
							className='col-md-4'
							name='author'
							placeholder={t('inputs.author')}
							required
						/>
						<InputText
							className='col-md-4'
							name='product'
							placeholder={t('inputs.product')}
							required
						/>
						<InputTextarea
							name='text'
							placeholder={t('inputs.text')}
							required
						/>
						<InputRadioGroup title={t('inputs.rating')}>
							<InputRadio name='rating' value='1' label={1} />
							<InputRadio name='rating' value='2' label={2} />
							<InputRadio name='rating' value='3' label={3} />
							<InputRadio name='rating' value='4' label={4} />
							<InputRadio name='rating' value='5' label={5} />
						</InputRadioGroup>
						<InputDatePicker
							className='col-md-4'
							name='date_added'
							placeholder={t('inputs.date_added')}
						/>
						<InputSelect
							className='col-md-4'
							name='status'
							placeholder={t('inputs.status')}
							options={[
								{ value: 'disabled', label: 'Disabled' },
								{ value: 'enabled', label: 'Enabled' },
							]}
						/>
					</FormLayout>
				);
			}}
		/>
	);
};

AdminReviewsForm.displayName = 'AdminReviewsForm';
