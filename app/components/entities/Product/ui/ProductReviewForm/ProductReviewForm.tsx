import React, { useState, FC } from 'react';
import { Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { InputText, InputTextarea } from '@shared/inputs';

export const ProductReviewForm: FC = () => {
	const [name, setName] = useState('');
	const [review, setReview] = useState('');
	const t = useTranslations();

	const onSubmit = () => {};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ name, review }}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<InputText
						value={name}
						onChange={(e) => setName(e.target.value)}
						name='name'
						placeholder={t('inputs.name')}
					/>
					<InputTextarea
						name='review'
						value={review}
						onChange={(e) => setReview(e.target.value)}
						placeholder={t('inputs.review')}
					/>
				</form>
			)}
		</Form>
	);
};
