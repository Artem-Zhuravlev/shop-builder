import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { FormLayout } from '@widgets/FormLayout';
import { ImageMetaProps } from '@lib/types/ImageMetaProps';
import {
	InputText,
	InputSelect,
	SelectOption,
	InputCheckbox,
	InputImage,
} from '@shared/inputs';
import { LanguageTabs } from '@features/tabs';

interface CategoriesSeoForm {
	keywords: string;
}

interface CategoriesSeoFormData {
	ua: CategoriesSeoForm;
	en: CategoriesSeoForm;
}

export const AdminCategoriesSeoForm: FC = () => {
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
			<Form
				onSubmit={onSubmit}
				initialValues={data[language]}>
				{({ handleSubmit }) => (
					<FormLayout
						onSubmit={handleSubmit}
						title='SEO'>
						<InputText
							name='keywords'
							placeholder={t('inputs.keywords')}
						/>
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminCategoriesSeoForm.displayName = 'AdminCategoriesSeoForm';
