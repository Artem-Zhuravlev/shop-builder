'use client';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Field } from 'react-final-form';
import cls from './InputSwitcher.module.scss';

interface InputSwitcherProps {
  label?: string;
  name: string;
}

export const InputSwitcher: FC<InputSwitcherProps> = (props) => {
  const { label, name } = props;
  const t = useTranslations('base');

  const renderInputField = ({ input }: any) => {
    return (
      <label data-testid='input-switcher' className={cls.InputSwitcher}>
        <input
          {...input}
          className='sr-only'
          aria-label={input.checked ? t('on') : t('off')}
        />
        <div className={cls.InputSwitcherControl} />
        {label}
      </label>
    );
  };

  return (
    <>
      <Field name={name} component='input' type='checkbox'>
        {renderInputField}
      </Field>
    </>
  );
};

InputSwitcher.displayName = 'InputSwitcher';
