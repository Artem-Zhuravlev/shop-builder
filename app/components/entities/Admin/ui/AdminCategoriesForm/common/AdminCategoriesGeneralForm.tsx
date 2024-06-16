import { InputText, InputEdit, InputTextarea } from '@shared/inputs';
import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { FormLayout } from '@widgets/FormLayout';
import { LanguageTabs } from '@features/tabs';

interface GeneralForm {
	category_name: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
}

interface GeneralFormData {
	ua: GeneralForm;
	en: GeneralForm;
}

export const AdminCategoriesGeneralForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

	const onSubmit = (values: GeneralForm) => {
		console.log('Form Submitted:', values);
	};

	const data: GeneralFormData = {
		ua: {
			category_name: 'Категорія ua',
			description: 'Опис ua',
			meta_title: 'Мета заголовок ua',
			meta_description: 'Мета опис ua',
			meta_keywords: 'Мета ключові слова ua',
		},
		en: {
			category_name: 'Category en',
			description: 'Description en',
			meta_title: 'Meta title en',
			meta_description: 'Meta description en',
			meta_keywords: 'Meta keywords en',
		},
	};

	return (
		<>
			<LanguageTabs
				items={['en', 'ua']}
				onSelect={(language) => setLanguage(language as 'en' | 'ua')}
			/>

			<Form
				onSubmit={onSubmit}
				initialValues={data[language]}>
				{({ handleSubmit }) => (
					<FormLayout
						onSubmit={handleSubmit}
						title={t('base.general')}>
						<InputText
							name='category_name'
							placeholder={t('inputs.category_name')}
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
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminCategoriesGeneralForm.displayName = 'AdminCategoriesGeneralForm';
