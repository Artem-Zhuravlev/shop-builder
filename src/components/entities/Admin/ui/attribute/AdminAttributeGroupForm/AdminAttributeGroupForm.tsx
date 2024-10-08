'use client';
import { LanguageTabs } from '@/components/features/tabs';
import { InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminAttributeGroupForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const data = {
		en: {
			attribute_group_name: 'Attribute group name',
		},
		ua: {
			attribute_group_name: 'Назва групи атрибуту',
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
							title={t('base.attribute_groups')}
						>
							<InputText
								className='col-md-4'
								name={`${language}.attribute_group_name`}
								placeholder={t('inputs.attribute_group_name')}
								required
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
