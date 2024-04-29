'use client';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { Form } from 'react-final-form';
import { confirmPasswordValidate } from '@utils/validations';
import { AccountFormControls } from '../AccountFormControls/AccountFormControls';
import cls from './AccountChangePasswordForm.module.scss';
import { InputPassword } from '@shared/inputs';

export const AccountChangePasswordForm: FC = () => {
	const t = useTranslations();
	const router = useRouter();

	return (
		<div className={cls.AccountChangePasswordForm}>
			<h3>{t('account.change_password')}</h3>
			<Form
				onSubmit={() => {}}
				initialValues={{}}
				render={({ handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<InputPassword
							type='password'
							name='password'
							placeholder={t('inputs.password')}
							required
						/>
						<InputPassword
							type='password'
							name='new_password'
							placeholder={t('inputs.password_confirm')}
							additionalValue={values.password}
							validationHandler={confirmPasswordValidate}
							required
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
