'use client';
import { ErrorAlert, SuccessAlert } from '@/components/features/alerts';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { isoCode2Validate, isoCode3Validate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCountriesForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, submitFailed, submitSucceeded }) => {
					return (
						<>
							<FormLayout
								className='row align-items-center'
								onSubmit={handleSubmit}
								title={t('base.countries')}
							>
								<InputText
									className='col-md-4'
									name='country_name'
									placeholder={t('admin.country_name')}
									required
								/>
								<InputText
									className='col-md-4'
									name='iso_code_2'
									placeholder={t('admin.iso_code_2')}
									validationHandler={isoCode2Validate}
								/>
								<InputText
									className='col-md-4'
									name='iso_code_3'
									placeholder={t('admin.iso_code_3')}
									validationHandler={isoCode3Validate}
								/>
								<InputCheckbox
									name='postcode_required'
									label={t('admin.postcode_required')}
								/>
								<InputCheckbox name='status' label={t('inputs.status')} />
							</FormLayout>
							<ErrorAlert submitFailed={submitFailed} />
							<SuccessAlert submitSucceeded={submitSucceeded} />
						</>
					);
				}}
			/>
		</div>
	);
};

AdminCountriesForm.displayName = 'AdminCountriesForm';
