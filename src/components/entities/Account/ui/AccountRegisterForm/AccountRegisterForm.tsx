import { ButtonBase } from '@/components/shared/ButtonBase';
import { InputCheckbox, InputText } from '@/components/shared/inputs';
import {
	emailValidate,
	passwordValidate,
	phoneValidate,
} from '@/utils/validations';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import cls from './AccountRegisterForm.module.scss';

export const AccountRegisterForm: FC = () => {
	const t = useTranslations();
	const onSubmit = () => {};

	return (
		<div className={cls.AccountRegisterForm}>
			<h3>{t('account.register')}</h3>
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => (
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
						<InputText
							name='email'
							placeholder={t('inputs.email')}
							required
							validationHandler={emailValidate}
						/>
						<InputText
							name='phone'
							placeholder={t('inputs.phone')}
							required
							validationHandler={phoneValidate}
						/>
						<InputText
							name='password'
							placeholder={t('inputs.password')}
							required
							validationHandler={passwordValidate}
						/>
						<InputText
							name='password_confirm'
							placeholder={t('inputs.password_confirm')}
							required
							validationHandler={passwordValidate}
						/>
						<InputCheckbox
							name='privacy_policy'
							label={
								<span>
									{t('inputs.privacy_policy.agree')}

									<Link href='/privacy-policy' className='link'>
										{t('inputs.privacy_policy.link')}
									</Link>
								</span>
							}
						/>
						<ButtonBase type='submit' className='col-md-4 col-sm-6'>
							{t('inputs.register')}
						</ButtonBase>
					</form>
				)}
			</Form>
		</div>
	);
};

AccountRegisterForm.displayName = 'AccountRegisterForm';
