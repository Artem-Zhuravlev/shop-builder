'use client';
import { LanguageTabs } from '@/components/features/tabs';
import {
	InputCheckbox,
	InputText,
	InputTextarea,
} from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCustomerGroupsForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');

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
				render={({ handleSubmit }) => {
					return (
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('inputs.customer_group')}
						>
							<InputText
								name={`${language}.name`}
								placeholder={t('admin.customer_group_name')}
								required
							/>
							<InputTextarea
								name={`${language}.description`}
								placeholder={t('inputs.description')}
							/>
							<InputCheckbox
								name='approve_new_customers'
								label={t('inputs.approve_new_customers')}
							/>
							<InputText
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

AdminCustomerGroupsForm.displayName = 'AdminCustomerGroupsForm';
