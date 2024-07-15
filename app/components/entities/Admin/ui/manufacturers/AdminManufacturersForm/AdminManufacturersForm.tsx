import { LanguageTabs } from '@features/tabs';
import { InputImage, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminManufacturersForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<>
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
							title={t('base.manufacturers')}
						>
							<InputImage name='image' />
							<InputText
								className='col-md-4'
								name='manufacturer_name'
								placeholder={t('inputs.manufacturer_name')}
								required
							/>
							<InputText
								className='col-md-4'
								type='number'
								name='sort_order'
								placeholder={t('inputs.sort_order')}
							/>
							<InputText
								className='col-md-4'
								name={`${language}.keyword`}
								placeholder={t('inputs.keywords')}
							/>
						</FormLayout>
					);
				}}
			/>
		</>
	);
};

AdminManufacturersForm.displayName = 'AdminManufacturersForm';
