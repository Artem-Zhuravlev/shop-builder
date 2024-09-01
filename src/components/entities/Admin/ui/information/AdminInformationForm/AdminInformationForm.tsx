'use client';
import { LanguageTabs } from '@/components/features/tabs';
import {
	InputCheckbox,
	InputEdit,
	InputSelect,
	InputText,
	InputTextarea,
} from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminInformationForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
			<LanguageTabs
				items={['en', 'ua']}
				onSelect={(language) => setLanguage(language as 'en' | 'ua')}
			/>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit }) => {
					return (
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('base.information')}
						>
							<InputText
								name={`${language}.title`}
								placeholder={t('inputs.information_title')}
								required
							/>
							<InputEdit
								name={`${language}.description`}
								placeholder={t('inputs.description')}
								required
							/>
							<InputText
								name={`${language}.meta_title`}
								placeholder={t('inputs.meta_title')}
								required
							/>
							<InputTextarea
								name={`${language}.meta_description`}
								placeholder={t('inputs.meta_description')}
							/>
							<InputTextarea
								name={`${language}.meta_keywords`}
								placeholder={t('inputs.meta_keywords')}
							/>
							<InputCheckbox name='bottom' label={t('inputs.bottom')} />
							<InputSelect
								className='col-md-4'
								name='type'
								placeholder={t('inputs.status')}
								options={[
									{ value: 'enabled', label: 'Enabled' },
									{ value: 'disabled', label: 'Disabled' },
								]}
							/>
							<InputText
								className='col-md-4'
								type='number'
								name='sort_order'
								placeholder={t('inputs.sort_order')}
							/>
							<InputText
								className='col-md-4'
								type='number'
								name={`${language}.keywords`}
								placeholder={t('inputs.keywords')}
							/>
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminInformationForm.displayName = 'AdminInformationForm';
