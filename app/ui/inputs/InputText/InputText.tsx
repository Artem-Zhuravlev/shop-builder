import React, { FC, InputHTMLAttributes, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Field } from 'react-final-form';
import cls from './InputText.module.scss';
import { Label } from '../Label/Label';
import { classNames } from '@/utils/classNames/classNames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withForm?: boolean;
  label?: string;
  isRequired?: boolean;
  validationHandler?: (value: string) => string | void;
}

export const InputText:FC<InputProps> = ({
  id,
  name = 'field',
  value,
  disabled,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  withForm = true,
  isRequired = false,
  validationHandler,
  label
}) => {
  const [initialValue, setInitialValue] = useState(value);
  const t = useTranslations();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    onChange(newValue);
  };

  const isEmpty = (value: string | number) : boolean => {
    return value === '' || value === 0
  }

  const getValidationMessage = (value: string): string | void => {
    if (isRequired && isEmpty(value) && !validationHandler) {
      return t('field_error.required');
    }
  
    if (validationHandler) {
      return validationHandler(value);
    }
  
    return;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderInputField = ({ input, meta }: any) => {
    setError(!!meta.error && meta.touched && meta.submitFailed);
    setErrorMessage(meta.error || '');
    const mods: Record<string, boolean> = {
      [cls.InputTextError]: error
    };

    return (
      <input
        {...input}
        className={classNames(cls.InputText, mods)}
        type="text"
        placeholder={withForm ? undefined : 'placeholder'}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  };

  return (
    <Label
      name={label}
      hasError={error}
      error={errorMessage}
    >
      {
        withForm ? (
          <Field
            name={name}
            validate={(value) => getValidationMessage(value)}            
          >
            { renderInputField }
          </Field>
        ) : (
          <input
            className={cls.InputText}
            type="text"
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete='off'
            value={initialValue}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        )
      }
    </Label>
  );
}