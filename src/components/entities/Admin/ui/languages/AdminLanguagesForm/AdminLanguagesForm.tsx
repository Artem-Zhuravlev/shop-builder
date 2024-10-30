'use client';
import { ErrorAlert } from '@/components/features/alerts';
import {
	createApiLanguage,
	updateApiLanguage,
	getApiLanguage,
} from '@/components/shared/api/admin';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import type { LanguagesInterface } from '@interfaces/index';
import { useTranslations } from 'next-intl';
import React, { type FC, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchPreselectedForm, handleFormAction } from '@/utils/form';
import { Form } from 'react-final-form';

export const AdminLanguagesForm: FC = () => {
	const t = useTranslations();
	const router = useRouter();
	const { slug } = useParams();
	const [initialValues, setInitialValues] = useState<
		LanguagesInterface | undefined
	>(undefined);

	useEffect(() => {
		const loadData = async () => {
			const formData = await fetchPreselectedForm<LanguagesInterface>(
				slug,
				getApiLanguage,
			);
			setInitialValues(formData);
		};

		loadData();
	}, [slug]);

	const onSubmit = async (value: LanguagesInterface): Promise<void> => {
		try {
			await handleFormAction<LanguagesInterface>(
				slug,
				value,
				createApiLanguage,
				updateApiLanguage,
			);

			router.push('/admin/languages');
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error('Error sending languages form:', error.message);
			} else {
				console.error('An unknown error occurred during languages sending.');
			}
			throw error;
		}
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				initialValues={initialValues}
				render={({ handleSubmit, submitFailed }) => {
					return (
						<>
							<FormLayout
								className='row align-items-center'
								onSubmit={handleSubmit}
								title={t('base.languages')}
							>
								<InputText
									className='col-md-4'
									name='name'
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
							<ErrorAlert submitFailed={submitFailed} />
						</>
					);
				}}
			/>
		</div>
	);
};

AdminLanguagesForm.displayName = 'AdminLanguagesForm';
