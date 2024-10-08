'use client';
import { LanguageTabs } from '@/components/features/tabs';
import { InputSelect, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminAttributesForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const data = {
		en: {
			attribute_name: 'Attribute',
		},
		ua: {
			attribute_name: 'Атрибут',
		},
	};

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
				initialValues={data}
				render={({ handleSubmit }) => {
					return (
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('base.attributes')}
						>
							<InputText
								className='col-md-4'
								name={`${language}.attribute_name`}
								placeholder={t('inputs.attribute_name')}
								required
							/>
							<InputSelect
								className='col-md-4'
								name='attribute_group'
								placeholder={t('inputs.attribute_group')}
								options={[
									{ value: 'memory', label: 'Memory' },
									{ value: 'motherboard', label: 'Motherboard' },
								]}
							/>
							<InputText
								className='col-md-4'
								type='number'
								name='sort_order'
								placeholder={t('inputs.sort_order')}
							/>
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminAttributesForm.displayName = 'AdminAttributesForm';
