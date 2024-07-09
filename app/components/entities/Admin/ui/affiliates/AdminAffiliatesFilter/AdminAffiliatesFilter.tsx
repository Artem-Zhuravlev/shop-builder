import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputSelect, InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';

export const AdminAffiliatesFilter: FC = () => {
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
						<InputText name='customer' placeholder={t('inputs.customer')} />
						<InputText
							name='tracking_code'
							placeholder={t('inputs.tracking_code')}
						/>
						<InputText
							type='number'
							name='commission'
							placeholder={t('inputs.commission')}
						/>
						<InputSelect
							name='status'
							placeholder={t('inputs.status')}
							options={[
								{ value: 'enabled', label: t('base.enabled') },
								{ value: 'disabled', label: t('base.disabled') },
							]}
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

AdminAffiliatesFilter.displayName = 'AdminAffiliatesFilter';
