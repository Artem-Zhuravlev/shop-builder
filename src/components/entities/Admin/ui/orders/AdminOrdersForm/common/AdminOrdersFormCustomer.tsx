import { InputDatePicker, InputText } from '@/components/shared/inputs';
import { emailValidate, phoneValidate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminOrdersFormCustomer: FC = () => {
	const t = useTranslations();

	return (
		<>
			<h3 className='h4'>{t('base.customer')}</h3>
			<InputText
				className='col-md-4'
				name='customer'
				placeholder={t('inputs.customer')}
				required
			/>
			<InputText
				className='col-md-4'
				name='customer_group'
				placeholder={t('inputs.customer_group')}
				required
			/>
			<InputText
				className='col-md-4'
				name='first_name'
				placeholder={t('inputs.first_name')}
				required
			/>
			<InputText
				className='col-md-4'
				name='last_name'
				placeholder={t('inputs.last_name')}
				required
			/>
			<InputText
				className='col-md-4'
				name='email'
				placeholder={t('inputs.email')}
				required
				validationHandler={emailValidate}
			/>
			<InputText
				className='col-md-4'
				name='phone'
				placeholder={t('inputs.phone')}
				required
				validationHandler={phoneValidate}
			/>
			<InputDatePicker
				className='col-md-4'
				name='date_added'
				placeholder={t('inputs.date_added')}
			/>
		</>
	);
};

AdminOrdersFormCustomer.displayName = 'AdminOrdersFormCustomer';
