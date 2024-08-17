'use client';
import { InputImage, InputText, InputTextarea } from '@shared/inputs';
import { emailValidate, phoneValidate } from '@utils/validations';
import { FormLayout } from '@widgets/FormLayout';
import { updateSettingsController } from 'app/api/settings/settingsUpdateController';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';
import type { AlertItemInterface } from '@shared/AlertBase/common/AlertItem';

export const AdminSettingsStoreForm: FC = () => {
	const t = useTranslations();
	const [submitStatus, setSubmitStatus] = useState<AlertItemInterface[]>([]);

	const onSubmit = async (values: any) => {
		try {
			const updatedSettings = await updateSettingsController(values);
			setSubmitStatus((prev) => [
				...prev,
				{ type: 'success', message: 'Success: Settings updated successfully' },
			]);
			console.log('Updated Settings:', updatedSettings);
		} catch (error) {
			setSubmitStatus((prev) => [
				...prev,
				{
					type: 'error',
					message: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
				},
			]);
		}
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				{({ handleSubmit, submitting, pristine }) => (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.store')}
						status={submitStatus}
						submitting={submitting}
						pristine={pristine}
					>
						<InputText
							className='col-md-4'
							name='store_name'
							placeholder={t('inputs.store_name')}
							required
						/>
						<InputText
							className='col-md-4'
							name='store_owner'
							placeholder={t('inputs.store_owner')}
							required
						/>
						<InputText
							className='col-md-4'
							name='geocode'
							placeholder={t('inputs.geocode')}
						/>
						<InputText
							className='col-md-4'
							name='email'
							placeholder={t('inputs.email')}
							validationHandler={emailValidate}
							required
						/>
						<InputText
							className='col-md-4'
							name='phone'
							placeholder={t('inputs.phone')}
							validationHandler={phoneValidate}
							required
						/>
						<InputTextarea name='address' placeholder={t('inputs.address')} />
						<InputImage name='image' />
						<InputTextarea
							name='opening_times'
							placeholder={t('inputs.opening_times')}
						/>
						<InputTextarea name='comment' placeholder={t('inputs.comment')} />
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminSettingsStoreForm.displayName = 'AdminSettingsStoreForm';
