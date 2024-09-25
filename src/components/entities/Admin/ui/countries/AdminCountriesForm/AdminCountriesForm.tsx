'use client';
import { ErrorAlert, SuccessAlert } from '@/components/features/alerts';
import type { CountriesInterface } from '@interfaces/index';
import { createApiCountry } from '@/components/shared/api/admin';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { isoCode2Validate, isoCode3Validate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { useRouter } from 'next/navigation';

export const AdminCountriesForm: FC = () => {
	const t = useTranslations();
	const router = useRouter();

	const onSubmit = async (value: CountriesInterface): Promise<void> => {
		try {
			await createApiCountry(value);
			router.push('/admin/countries');
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error('Error creating country:', error.message);
			} else {
				console.error('An unknown error occurred during country creation.');
			}
			throw error;
		}
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, submitFailed }) => {
					return (
						<>
							<FormLayout
								className='row align-items-center'
								onSubmit={handleSubmit}
								title={t('base.countries')}
							>
								<InputText
									className='col-md-4'
									name='country'
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
						</>
					);
				}}
			/>
		</div>
	);
};

AdminCountriesForm.displayName = 'AdminCountriesForm';
