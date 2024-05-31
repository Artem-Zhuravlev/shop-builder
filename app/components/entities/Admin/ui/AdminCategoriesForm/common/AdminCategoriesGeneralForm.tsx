import { InputText } from '@shared/inputs';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';

export const AdminCategoriesGeneralForm: FC = () => {
	const t = useTranslations('inputs');
	const onSubmit = () => {};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<InputText
						name='category_name'
						placeholder={t('category_name')}
					/>
				</form>
			)}
		</Form>
	);
};
