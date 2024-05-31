import { InputText, InputEdit, InputTextarea } from '@shared/inputs';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { FormLayout } from '@widgets/FormLayout';

export const AdminCategoriesGeneralForm: FC = () => {
	const t = useTranslations();
	const onSubmit = () => {};

	return (
		<Form onSubmit={onSubmit}>
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
	);
};
