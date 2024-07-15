import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputText, InputReturnStatus } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminReturnsFilter: FC = () => {
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
						<InputText
							type='number'
							name='return_id'
							placeholder={t('inputs.return_id')}
						/>
						<InputText
							type='number'
							name='order_id'
							placeholder={t('inputs.order_id')}
						/>
						<InputText name='customer' placeholder={t('inputs.customer')} />
						<InputText name='product' placeholder={t('inputs.product')} />
						<InputText name='model' placeholder={t('inputs.model')} />
						<InputReturnStatus name='status' />
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

AdminReturnsFilter.displayName = 'AdminReturnsFilter';
