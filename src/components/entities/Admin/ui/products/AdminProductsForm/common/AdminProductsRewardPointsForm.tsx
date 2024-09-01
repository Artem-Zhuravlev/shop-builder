'use client';
import { InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminProductsRewardPointsForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (values: any) => {
		console.log('Form Submitted:', values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<FormLayout onSubmit={handleSubmit} title={t('base.reward_points')}>
					<InputText name='points' placeholder={t('inputs.points')} />
				</FormLayout>
			)}
		</Form>
	);
};

AdminProductsRewardPointsForm.displayName = 'AdminProductsRewardPointsForm';
