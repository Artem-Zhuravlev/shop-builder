'use client';
import {
	InputCheckbox,
	InputDatePicker,
	InputPassword,
	InputRadio,
	InputRadioGroup,
	InputSelect,
	InputText,
	type SelectOption,
} from '@/components/shared/inputs';
import {
	emailValidate,
	passwordValidate,
	phoneValidate,
} from '@/utils/validations';
import { FormLayout } from '@/components/widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

interface ProductsForm {
	model: string;
	sku?: string;
	upc?: string;
	ean?: string;
	jan?: string;
	isbn?: string;
	mpn?: string;
	location?: string;
	price: string;
	tax_class?: string;
	quantity: number;
	minimum_quantity?: number;
	subtract_stock?: SelectOption;
	out_of_stock?: SelectOption;
	requires_shipping?: SelectOption;
	date_available?: string;
	dimension_l?: string;
	dimension_w?: string;
	dimension_h?: string;
	length_class?: string;
	weight?: string;
	weight_class?: SelectOption;
	status: SelectOption;
	sort_order: number;
}

export const AdminCustomersGeneralForm: FC = () => {
	const t = useTranslations();
	const onSubmit = (values: ProductsForm) => {
		console.log('Form Submitted:', values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<FormLayout
					className='row align-items-center'
					onSubmit={handleSubmit}
					title={t('base.general')}
				>
					<h3 className='h4'>{t('base.customer_details')}</h3>
					<InputSelect
						className='col-md-4'
						name='store'
						placeholder={t('inputs.store')}
						options={[{ value: 'default', label: 'Default' }]}
					/>
					<InputSelect
						className='col-md-4'
						name='customer_group'
						placeholder={t('inputs.customer_group')}
						options={[{ value: 'default', label: 'Default' }]}
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
					<h3 className='h4'>{t('inputs.password')}</h3>
					<InputPassword
						className='col-md-4'
						name='password'
						placeholder={t('inputs.password')}
						validationHandler={passwordValidate}
						required
					/>
					<InputPassword
						className='col-md-4'
						name='password_confirm'
						placeholder={t('inputs.password_confirm')}
						validationHandler={passwordValidate}
						required
					/>
					<h3 className='h4'>{t('base.other')}</h3>
					<InputCheckbox name='newsletter' label={t('inputs.newsletter')} />
					<InputCheckbox name='status' label={t('inputs.status')} />
					<InputCheckbox name='safe' label={t('inputs.safe')} />
				</FormLayout>
			)}
		</Form>
	);
};

AdminCustomersGeneralForm.displayName = 'AdminCustomersGeneralForm';
