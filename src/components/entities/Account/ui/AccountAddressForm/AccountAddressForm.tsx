'use client';
import { InputSelect, InputText } from '@/components/shared/inputs';
import { postCodeValidate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { AccountFormControls } from '../AccountFormControls/AccountFormControls';
import cls from './AccountAddressForm.module.scss';

export const AccountAddressForm: FC = () => {
	const t = useTranslations();
	const router = useRouter();

	const onSubmit = () => {};

	return (
		<div className={cls.AccountAddressForm}>
			<h3>{t('account.add_address')}</h3>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit} className='row'>
						<InputText
							name='first_name'
							placeholder={t('inputs.first_name')}
							required
							className='col-md-6'
						/>
						<InputText
							name='last_name'
							placeholder={t('inputs.last_name')}
							required
							className='col-md-6'
						/>
						<InputText name='company' placeholder={t('inputs.company')} />
						<InputText
							name='address_1'
							placeholder={`${t('inputs.address')} 1`}
							required
						/>
						<InputText
							name='address_2'
							placeholder={`${t('inputs.address')} 2`}
						/>
						<InputText
							name='city'
							placeholder={t('inputs.city')}
							required
							className='col-md-6'
						/>
						<InputText
							name='post_code'
							placeholder={t('inputs.post_code')}
							required
							validationHandler={postCodeValidate}
							className='col-md-6'
						/>
						<InputSelect
							name='country'
							placeholder={t('inputs.country')}
							options={[{ label: 'Ukraine', value: 'ua' }]}
							className='col-md-6'
						/>
						<InputSelect
							name='region'
							placeholder={t('inputs.region')}
							options={[{ label: 'Ukraine', value: 'ua' }]}
							required
							className='col-md-6'
						/>
						<AccountFormControls
							handlePrev={() => {
								router.push('/address');
							}}
						/>
					</form>
				)}
			/>
		</div>
	);
};

AccountAddressForm.displayName = 'AccountAddressForm';
