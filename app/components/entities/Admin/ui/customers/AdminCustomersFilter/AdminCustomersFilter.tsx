'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputSelect, InputText } from '@shared/inputs';
import { emailValidate } from '@utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCustomersFilter: FC = () => {
	const t = useTranslations();
	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<h3 className='h2'>{t('base.filter')}</h3>
							<InputText name='name' placeholder={t('admin.customer_name')} />
							<InputText
								name='email'
								placeholder={t('inputs.email')}
								validationHandler={emailValidate}
								required
							/>
							<InputSelect
								name='customer_group'
								placeholder={t('inputs.customer_group')}
								options={[{ value: 'default', label: 'Default' }]}
							/>
							<InputSelect
								name='status'
								placeholder={t('inputs.status')}
								options={[
									{ value: 'enabled', label: 'Enabled' },
									{ value: 'disabled', label: 'Disabled' },
								]}
							/>
							<InputDatePicker
								name='date_added'
								placeholder={t('inputs.date_added')}
							/>
							<ButtonBase type='submit'>
								<span className='icon-filter' />
								{t('base.filter')}
							</ButtonBase>
						</form>
					);
				}}
			/>
		</div>
	);
};

AdminCustomersFilter.displayName = 'AdminCustomersFilter';
