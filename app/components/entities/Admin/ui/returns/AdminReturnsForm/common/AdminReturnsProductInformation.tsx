import { InputSelect, InputText, InputTextarea } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

export const AdminReturnsProductInformation: FC = () => {
	const t = useTranslations();

	return (
		<>
			<h3 className='h4'>{t('admin.product_information')}</h3>
			<InputText
				className='col-md-4'
				name='product'
				placeholder={t('inputs.product')}
				required
			/>
			<InputText
				className='col-md-4'
				name='model'
				placeholder={t('inputs.model')}
				required
			/>
			<InputText
				className='col-md-4'
				type='number'
				name='quantity'
				placeholder={t('inputs.quantity')}
			/>
			<InputSelect
				className='col-md-4'
				name='return_reason'
				placeholder={t('inputs.return_reason')}
				options={[
					{
						value: 'dead_on_arrival',
						label: t('inputs.dead_on_arrival'),
					},
					{
						value: 'faulty_please_supply_details',
						label: t('inputs.faulty_please_supply_details'),
					},
					{
						value: 'order_error',
						label: t('inputs.order_error'),
					},
					{
						value: 'other_please_supply_details',
						label: t('inputs.other_please_supply_details'),
					},
					{
						value: 'received_wrong_item',
						label: t('inputs.received_wrong_item'),
					},
				]}
			/>
			<InputSelect
				className='col-md-4'
				name='opened'
				placeholder={t('inputs.opened')}
				options={[
					{
						value: 'opened',
						label: t('inputs.opened'),
					},
					{
						value: 'unopened',
						label: t('inputs.unopened'),
					},
				]}
			/>
			<InputTextarea name='comment' placeholder={t('inputs.comment')} />
			<InputSelect
				className='col-md-4'
				name='return_action'
				placeholder={t('inputs.return_action')}
				options={[
					{
						value: 'credit_issued',
						label: t('inputs.credit_issued'),
					},
					{
						value: 'refunded',
						label: t('inputs.refunded'),
					},
					{
						value: 'replacement_sent',
						label: t('inputs.replacement_sent'),
					},
				]}
			/>
		</>
	);
};

AdminReturnsProductInformation.displayName = 'AdminReturnsProductInformation';
