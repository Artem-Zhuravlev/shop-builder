'use client';
import { LanguageTabs } from '@features/tabs';
import { useSelector } from '@lib/redux/store';
import { InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';
import {
	AdminOrdersFormCustomer,
	AdminOrdersFormHistory,
	AdminOrdersFormProducts,
	AdminOrdersFormShippingAddress,
} from './common';

export const AdminOrdersForm: FC = () => {
	const t = useTranslations();
	const [language, setLanguage] = useState<'en' | 'ua'>('en');
	const defaultCurrency = useSelector((state) => state.product.currency);
	const [data, setData] = useState({
		order_id: 100,
		order_invoice: 20342034,
		customer: 'James Bond',
		customer_group: 'Fund Corp',
		first_name: 'John Doe',
		last_name: 'Bond',
		email: 'test@test.com',
		phone: '+808005553535',
		date_added: new Date('2024-02-03'),
		products: [
			{
				product: 'HP LP3065',
				model: 'Product 21',
				quantity: 1,
				unit_price: 100.12,
				total: 100.12,
			},
		],
		reward_points: 300,
		shipping_address: {
			first_name: 'First name',
			last_name: 'Last name',
			company: 'Company',
			address_1: 'Address 1',
			city: 'City',
			postcode: 'Postcode',
			country: { value: 'algeria', label: 'Algeria' },
			region: { value: 'agdam', label: 'Agdam' },
		},
		history: [
			{
				date_added: new Date('2024-02-03'),
				status: { value: 'pending', label: t('base.pending') },
				notify_customer: true,
			},
		],
	});

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
				mutators={{
					...arrayMutators,
				}}
				initialValues={data}
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
							title={`${t('admin.order_id')} #${data.order_id}`}
						>
							<InputText
								className='col-md-4'
								name='order_invoice'
								placeholder={t('inputs.order_invoice')}
								required
								disabled
							/>
							<AdminOrdersFormCustomer />
							<AdminOrdersFormProducts pop={pop} push={push} />
							<AdminOrdersFormShippingAddress />
							<AdminOrdersFormHistory pop={pop} push={push} />
						</FormLayout>
					);
				}}
			/>
		</div>
	);
};

AdminOrdersForm.displayName = 'AdminOrdersForm';
