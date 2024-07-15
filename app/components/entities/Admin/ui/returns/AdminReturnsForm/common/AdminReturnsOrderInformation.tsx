import { InputDatePicker, InputText } from '@shared/inputs';
import { emailValidate, phoneValidate } from '@utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminReturnsOrderInformation: FC = () => {
	const t = useTranslations();

	return (
		<>
			<h3 className='h4'>{t('admin.order_information')}</h3>
			<InputText
				className='col-md-4'
				type='number'
				name='order_id'
				placeholder={t('inputs.order_id')}
				required
			/>
			<InputDatePicker
				className='col-md-4'
				name='date_added'
				placeholder={t('inputs.date_added')}
			/>
			<InputText
				className='col-md-4'
				name='customer'
				placeholder={t('inputs.customer')}
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
				validationHandler={emailValidate}
				required
			/>
			<InputText
				className='col-md-4'
				name='phone'
				placeholder={t('inputs.phone')}
				validationHandler={phoneValidate}
				required
			/>
		</>
	);
};

AdminReturnsOrderInformation.displayName = 'AdminReturnsOrderInformation';
