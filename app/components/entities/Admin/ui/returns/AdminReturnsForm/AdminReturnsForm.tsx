'use client';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import {
	AdminReturnsHistory,
	AdminReturnsOrderInformation,
	AdminReturnsProductInformation,
} from './common';

export const AdminReturnsForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				mutators={{
					...arrayMutators,
				}}
				render={({
					handleSubmit,
					form: {
						mutators: { push, pop },
					},
				}) => {
					return (
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('base.product_returns')}
						>
							<AdminReturnsOrderInformation />
							<AdminReturnsProductInformation />
							<AdminReturnsHistory pop={pop} push={push} />
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminReturnsForm.displayName = 'AdminReturnsForm';
