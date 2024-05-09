import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { nameValidate, passwordValidate } from '@utils/validations';
import { ButtonBase } from '@shared/ButtonBase';
import { InputPassword, InputText } from '@shared/inputs';
import cls from './AdminAuthForm.module.scss';
import { ContainerBase } from '@shared/ContainerBase';

export const AdminAuthForm: FC = () => {
	const t = useTranslations('inputs');
	const handleSubmit = () => {
		// TODO: handle submit Admin Auth Form
	};

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<ContainerBase
					small
					className={cls.AdminAuthForm}>
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
						<ButtonBase type='submit'>{t('login')}</ButtonBase>
					</form>
				</ContainerBase>
			)}
		/>
	);
};
