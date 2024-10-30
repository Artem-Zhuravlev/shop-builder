'use client';
import { ErrorAlert } from '@/components/features/alerts';
import type { CountriesInterface } from '@interfaces/index';
import {
	createApiCountry,
	updateApiCountry,
	getApiCountry,
} from '@/components/shared/api/admin';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { isoCode2Validate, isoCode3Validate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState, type FC } from 'react';
import { Form } from 'react-final-form';
import { useParams, useRouter } from 'next/navigation';
import { fetchPreselectedForm, handleFormAction } from '@/utils/form';

export const AdminCountriesForm: FC = () => {
	const t = useTranslations();
	const router = useRouter();
	const { slug } = useParams();
	const [initialValues, setInitialValues] = useState<
		CountriesInterface | undefined
	>(undefined);

	useEffect(() => {
		const loadData = async () => {
			const formData = await fetchPreselectedForm<CountriesInterface>(
				slug,
				getApiCountry,
			);
			setInitialValues(formData);
		};

		loadData();
	}, [slug]);

	const onSubmit = async (value: CountriesInterface): Promise<void> => {
		try {
			await handleFormAction<CountriesInterface>(
				slug,
				value,
				createApiCountry,
				updateApiCountry,
			);

			router.push('/admin/countries');
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error('Error sending country form:', error.message);
			} else {
				console.error('An unknown error occurred during country sending.');
			}
			throw error;
		}
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				initialValues={initialValues}
				render={({ handleSubmit, submitFailed }) => (
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
				)}
			/>
		</div>
	);
};

AdminCountriesForm.displayName = 'AdminCountriesForm';
