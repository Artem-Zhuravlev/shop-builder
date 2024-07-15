import { LanguageTabs } from '@features/tabs';
import { InputEdit, InputText, InputTextarea } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

interface GeneralForm {
	product_name: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	product_tags: string;
}

interface GeneralFormData {
	ua: GeneralForm;
	en: GeneralForm;
}

export const AdminProductsGeneralForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const onSubmit = (values: GeneralForm) => {
		console.log('Form Submitted:', values);
	};

	const data: GeneralFormData = {
		ua: {
			product_name: 'Назва продукту ua',
			description: 'Опис ua',
			meta_title: 'Мета заголовок ua',
			meta_description: 'Мета опис ua',
			meta_keywords: 'Мета ключові слова ua',
			product_tags: 'Теги продукту ua',
		},
		en: {
			product_name: 'Products name en',
			description: 'Description en',
			meta_title: 'Meta title en',
			meta_description: 'Meta description en',
			meta_keywords: 'Meta keywords en',
			product_tags: 'Product tags en',
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
					<FormLayout onSubmit={handleSubmit} title={t('base.general')}>
						<InputText
							name='product_name'
							placeholder={t('inputs.product_name')}
							required
						/>
						<InputEdit
							name='description'
							placeholder={t('inputs.description')}
						/>
						<InputText
							name='meta_title'
							placeholder={t('inputs.meta_title')}
							required
						/>
						<InputTextarea
							name='meta_description'
							placeholder={t('inputs.meta_description')}
						/>
						<InputTextarea
							name='meta_keywords'
							placeholder={t('inputs.meta_keywords')}
						/>
						<InputText
							name='product_tags'
							placeholder={t('inputs.product_tags')}
						/>
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminProductsGeneralForm.displayName = 'AdminProductsGeneralForm';
