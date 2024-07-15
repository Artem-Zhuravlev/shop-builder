import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputStatus, InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminOrdersFilter: FC = () => {
	const t = useTranslations();
	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<h3 className='h2'>{t('base.filter')}</h3>
						<InputText name='order_id' placeholder={t('inputs.order_id')} />
						<InputText name='customer' placeholder={t('inputs.customer')} />
						<InputStatus name='status' />
						<InputText
							type='number'
							name='total'
							placeholder={t('inputs.total')}
						/>
						<InputDatePicker
							name='date_added'
							placeholder={t('inputs.date_added')}
						/>
						<ButtonBase>
							<span className='icon-filter' />
							{t('base.filter')}
						</ButtonBase>
					</form>
				);
			}}
		/>
	);
};

AdminOrdersFilter.displayName = 'AdminOrdersFilter';
