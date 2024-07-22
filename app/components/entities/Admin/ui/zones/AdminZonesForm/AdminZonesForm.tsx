'use client';
import { InputCheckbox, InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminZonesForm: FC = () => {
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
							title={t('base.zones')}
						>
							<InputText
								className='col-md-4'
								name='zone_name'
								placeholder={t('admin.zone_name')}
								required
							/>
							<InputText
								className='col-md-4'
								name='zone_code'
								placeholder={t('admin.zone_code')}
							/>
							<InputSelect
								className='col-md-4'
								name='country'
								placeholder={t('inputs.country')}
								required
								options={[
									{ value: 'togo', label: 'Togo' },
									{ value: 'kenya', label: 'Kenya' },
								]}
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

AdminZonesForm.displayName = 'AdminZonesForm';
