import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import cls from './FooterSubscribeForm.module.scss';
import { emailValidate } from '@/utils/validations';
import { InputText } from '@/ui/inputs/InputText';
import { ButtonBase, ButtonType } from '@/ui/ButtonBase';

export const FooterSubscribeForm:FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const t = useTranslations();

  const onSubmit = () => {
    console.log('submit');
  }

  return (
    <Form
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={cls.FooterSubscribeForm}
        >
          <InputText
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            name="subscribe"
            validationHandler={emailValidate}
          />
          <ButtonBase
            buttonType={ButtonType.SUBMIT}
          >
            {t('base.subscribe')}
          </ButtonBase>
        </form>
      )}
    </Form>
  )
}