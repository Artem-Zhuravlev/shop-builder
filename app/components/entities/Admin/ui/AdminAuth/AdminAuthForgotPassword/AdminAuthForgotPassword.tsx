import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { ButtonBase } from '@shared/ButtonBase';
import { InputText } from '@shared/inputs';
import { AdminAuthWrapper } from '../AdminAuthWrapper/AdminAuthWrapper';
import { emailValidate } from '@utils/validations';

export const AdminAuthForgotPassword: FC = () => {
	const t = useTranslations();
	const router = useRouter();

	const handleSubmit = () => {
		// TODO: handle submit Admin Auth Form
	};

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<AdminAuthWrapper>
					<h3>{t('inputs.forgot_password')}</h3>
					<form onSubmit={handleSubmit}>
						<InputText
							name='email'
							placeholder={t('inputs.email')}
							validationHandler={emailValidate}
							required
						/>
						<div className='d-flex gap-1'>
							<ButtonBase type='submit'>{t('base.reset')}</ButtonBase>
							<ButtonBase
								type='submit'
								variant='light'
								onClick={() => router.push('/admin/login')}>
								{t('base.cancel')}
							</ButtonBase>
						</div>
					</form>
				</AdminAuthWrapper>
			)}
		/>
	);
};
