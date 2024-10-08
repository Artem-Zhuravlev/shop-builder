'use client';
import { LanguageTabs } from '@/components/features/tabs';
import { InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

interface CategoriesSeoForm {
	keywords: string;
}

interface CategoriesSeoFormData {
	ua: CategoriesSeoForm;
	en: CategoriesSeoForm;
}

export const AdminProductsSeoForm: FC = () => {
	const [language, setLanguage] = useState<'en' | 'ua'>('en');
	const t = useTranslations();
	const onSubmit = () => {};

	const data: CategoriesSeoFormData = {
		ua: {
			keywords: 'Ключові слова ua',
		},
		en: {
			keywords: 'Keywords ua',
		},
	};

	return (
		<>
			<LanguageTabs
				items={['en', 'ua']}
				onSelect={(language) => setLanguage(language as 'en' | 'ua')}
			/>
			<Form onSubmit={onSubmit} initialValues={data[language]}>
				{({ handleSubmit }) => (
					<FormLayout onSubmit={handleSubmit} title='SEO'>
						<InputText name='keywords' placeholder={t('inputs.keywords')} />
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminProductsSeoForm.displayName = 'AdminProductsSeoForm';
