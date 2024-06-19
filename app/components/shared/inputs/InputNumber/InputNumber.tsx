'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { useTranslations } from 'next-intl';
import React, { FC, InputHTMLAttributes } from 'react';
import { Field, useForm, useFormState } from 'react-final-form';
import cls from './InputNumber.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const InputNumber: FC<InputProps> = (props) => {
  const { name } = props;
  const t = useTranslations();
  const form = useForm();
  const formState = useFormState();
  const inputValue = formState.values[name];

  const handleDecrement = () => {
    if (inputValue > 0) {
      form.change(name, parseInt(inputValue) - 1);
    }
  };

  const handleIncrement = () => {
    form.change(name, parseInt(inputValue) + 1);
  };

  const renderInputField = ({ input }: any) => {
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value === '') {
        form.change(name, 0);
      }
    };

    return (
      <input
        {...input}
        min={0}
        aria-label={t('inputs.number_label')}
        onBlur={handleBlur}
      />
    );
  };

  return (
    <div className={cls.InputNumber}>
      <ButtonBase onClick={handleDecrement} aria-label={t('base.decrement')}>
        -
      </ButtonBase>
      <Field name={name} type='number' component='input'>
        {renderInputField}
      </Field>
      <ButtonBase onClick={handleIncrement} aria-label={t('base.increment')}>
        +
      </ButtonBase>
    </div>
  );
};

InputNumber.displayName = 'InputNumber';
