'use client';
import { InputPassword } from '@shared/inputs';
import { confirmPasswordValidate, passwordValidate } from '@utils/validations';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Form } from 'react-final-form';
import { AccountFormControls } from '../AccountFormControls/AccountFormControls';
import cls from './AccountChangePasswordForm.module.scss';

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
              validationHandler={passwordValidate}
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

AccountChangePasswordForm.displayName = 'AccountChangePasswordForm';
