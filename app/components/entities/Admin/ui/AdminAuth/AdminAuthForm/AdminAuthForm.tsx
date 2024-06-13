import React, { FC } from 'react';
import { Form } from 'react-final-form';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { nameValidate, passwordValidate } from '@utils/validations';
import { ButtonBase } from '@shared/ButtonBase';
import { InputPassword, InputText } from '@shared/inputs';
import { AdminAuthWrapper } from '../AdminAuthWrapper/AdminAuthWrapper';
import cls from './AdminAuthForm.module.scss';

export const AdminAuthForm: FC = () => {
	const t = useTranslations('inputs');
	const handleSubmit = () => {
		// TODO: handle submit Admin Auth Form
	};

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<AdminAuthWrapper>
					<h3>{t('admin_login')}</h3>
					<form onSubmit={handleSubmit}>
						<InputText
							name='username'
							placeholder={t('username')}
							validationHandler={nameValidate}
							required
						/>

						<InputPassword
							name='password'
							validationHandler={passwordValidate}
							placeholder={t('password')}
							required
						/>
						<Link
							href='/admin/forgot-password'
							className={`${cls.ForgotPassword} link-primary`}>
							{t('forgot_password')}
						</Link>
						<ButtonBase type='submit'>{t('login')}</ButtonBase>
					</form>
				</AdminAuthWrapper>
			)}
		/>
	);
};

AdminAuthForm.displayName = 'AdminAuthForm';
