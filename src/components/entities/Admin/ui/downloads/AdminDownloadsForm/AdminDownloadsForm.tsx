'use client';
import { LanguageTabs } from '@/components/features/tabs';
import { InputFile, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminDownloadsForm: FC = () => {
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
							title={t('base.downloads')}
						>
							<InputText
								className='col-md-4'
								name={`${language}.download_name`}
								placeholder={t('inputs.download_name')}
								required
							/>
							<InputFile className='col-md-4' name='filename' required />
							<InputText
								className='col-md-4'
								name='mask'
								placeholder={t('inputs.mask')}
								required
							/>
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminDownloadsForm.displayName = 'AdminDownloadsForm';
