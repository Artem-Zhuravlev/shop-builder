'use client';
import {
	InputCheckbox,
	InputSelect,
	InputStatus,
	InputText,
} from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminSettingsOptionForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (values: any) => {
		console.log('Form Submitted:', values);
	};

	const policyOptions = [
		{ value: 'none', label: t('inputs.none') },
		{ value: 'about_us', label: t('inputs.about_us') },
		{ value: 'delivery_information', label: t('inputs.delivery_information') },
		{ value: 'privacy_policy', label: t('inputs.privacy_policy.name') },
		{ value: 'terms_and_conditions', label: t('inputs.terms_and_conditions') },
	];

	const taxOptions = [
		{ value: 'none', label: t('inputs.none') },
		{ value: 'shipping_address', label: t('inputs.shipping_address') },
		{ value: 'payment_address', label: t('inputs.payment_address') },
	];

	const subscriptionOptions = [
		{ value: 'active', label: t('base.active') },
		{ value: 'canceled', label: t('base.canceled') },
		{ value: 'denied', label: t('base.denied') },
		{ value: 'expired', label: t('base.expired') },
		{ value: 'failed', label: t('base.failed') },
		{ value: 'pending', label: t('base.pending') },
	];

	return (
		<>
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.option')}
					>
						<h3 className='h4'>{t('base.products')}</h3>
						<InputText
							className='col-md-4'
							name='list_description_limit'
							placeholder={t('inputs.list_description_limit')}
							required
						/>
						<InputText
							className='col-md-4'
							name='default_items_per_page'
							placeholder={t('inputs.default_items_per_page')}
							required
						/>
						<InputText
							className='col-md-4'
							name='default_items_per_page_admin'
							placeholder={t('inputs.default_items_per_page_admin')}
							required
						/>
						<InputCheckbox
							className='col-md-4'
							name='product_report_status'
							label={t('inputs.product_report_status')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='category_product_count'
							label={t('inputs.category_product_count')}
						/>
						<h3 className='h4'>{t('base.reviews')}</h3>
						<InputCheckbox
							className='col-md-4'
							name='allow_reviews'
							label={t('inputs.allow_reviews')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='allow_reviews_products_purchased'
							label={t('inputs.allow_reviews_products_purchased')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='allow_guest_reviews'
							label={t('inputs.allow_guest_reviews')}
						/>
						<h3 className='h4'>{t('base.voucher')}</h3>
						<InputText
							type='number'
							className='col-md-4'
							name='voucher_min'
							placeholder={t('inputs.voucher_min')}
							required
						/>
						<InputText
							type='number'
							className='col-md-4'
							name='voucher_max'
							placeholder={t('inputs.voucher_max')}
							required
						/>
						<h3 className='h4'>{t('base.legal')}</h3>
						<InputSelect
							className='col-md-4'
							name='cookie_policy'
							placeholder={t('inputs.cookie_policy')}
							options={policyOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='gdpr_policy'
							placeholder={t('inputs.gdpr_policy')}
							options={policyOptions}
						/>
						<InputText
							type='number'
							className='col-md-4'
							name='gdpr_limit'
							placeholder={t('inputs.gdpr_limit')}
						/>
						<h3 className='h4'>{t('base.taxes')}</h3>
						<InputCheckbox
							name='display_prices_with_tax'
							label={t('inputs.display_prices_with_tax')}
						/>
						<InputSelect
							className='col-md-4'
							name='use_store_tax_address'
							placeholder={t('inputs.use_store_tax_address')}
							options={taxOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='use_customer_tax_address'
							placeholder={t('inputs.use_customer_tax_address')}
							options={taxOptions}
						/>
						<h3 className='h4'>{t('base.account')}</h3>
						<InputText
							type='number'
							className='col-md-4'
							name='customers_online_timeout'
							placeholder={t('inputs.customers_online_timeout')}
						/>
						<InputText
							type='number'
							className='col-md-4'
							name='max_login_attempts'
							placeholder={t('inputs.max_login_attempts')}
						/>
						<InputSelect
							className='col-md-4'
							name='account_terms'
							placeholder={t('inputs.account_terms')}
							options={policyOptions}
						/>
						<InputCheckbox
							className='col-md-4'
							name='customers_online'
							label={t('inputs.customers_online')}
						/>

						<InputCheckbox
							className='col-md-4'
							name='customers_activity'
							label={t('inputs.customers_activity')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='log_customers_searches'
							label={t('inputs.log_customers_searches')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='login_display_prices'
							label={t('inputs.login_display_prices')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='telephone_display'
							label={t('inputs.telephone_display')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='telephone_required'
							label={t('inputs.telephone_required')}
						/>

						<h3 className='h4'>{t('base.checkout')}</h3>
						<InputText
							className='col-md-4'
							name='invoice_prefix'
							placeholder={t('inputs.invoice_prefix')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='display_weight_on_cart_page'
							label={t('inputs.display_weight_on_cart_page')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='guest_checkout'
							label={t('inputs.guest_checkout')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='billing_address_required'
							label={t('inputs.billing_address_required')}
						/>
						<InputSelect
							className='col-md-4'
							name='checkout_terms'
							placeholder={t('inputs.checkout_terms')}
							options={policyOptions}
						/>
						<InputStatus
							className='col-md-4'
							name='processing_order_status'
							isMulti
							placeholder={t('inputs.processing_order_status')}
						/>
						<InputStatus
							className='col-md-4'
							name='complete_order_status'
							isMulti
							placeholder={t('inputs.complete_order_status')}
						/>
						<InputStatus
							className='col-md-4'
							name='fraud_order_status'
							isMulti
							placeholder={t('inputs.fraud_order_status')}
						/>
						<h3 className='h4'>{t('base.subscription')}</h3>
						<InputSelect
							className='col-md-4'
							name='subscription_status'
							placeholder={t('inputs.subscription_status')}
							options={subscriptionOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='subscription_active_status'
							placeholder={t('inputs.subscription_active_status')}
							options={subscriptionOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='subscription_expired_status'
							placeholder={t('inputs.subscription_expired_status')}
							options={subscriptionOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='subscription_canceled_status'
							placeholder={t('inputs.subscription_canceled_status')}
							options={subscriptionOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='subscription_failed_status'
							placeholder={t('inputs.subscription_failed_status')}
							options={subscriptionOptions}
						/>
						<InputSelect
							className='col-md-4'
							name='subscription_denied_status'
							placeholder={t('inputs.subscription_denied_status')}
							options={subscriptionOptions}
						/>
						<h3 className='h4'>{t('base.stock')}</h3>
						<InputCheckbox
							className='col-md-4'
							name='display_stock'
							label={t('inputs.display_stock')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='show_out_of_stock_warning'
							label={t('inputs.show_out_of_stock_warning')}
						/>
						<InputCheckbox
							className='col-md-4'
							name='stock_checkout'
							label={t('inputs.stock_checkout')}
						/>
						<h3 className='h4'>{t('base.return')}</h3>
						<InputSelect
							className='col-md-4'
							name='return_status'
							placeholder={t('inputs.return_status')}
							options={[
								{
									value: 'awaiting_products',
									label: t('base.awaiting_products'),
								},
								{ value: 'complete', label: t('base.complete') },
								{ value: 'pending', label: t('base.pending') },
							]}
						/>
						<InputSelect
							className='col-md-4'
							name='return_terms'
							placeholder={t('inputs.return_terms')}
							options={policyOptions}
						/>
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminSettingsOptionForm.displayName = 'AdminSettingsOptionForm';
