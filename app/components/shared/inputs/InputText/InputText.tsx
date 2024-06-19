'use client';
import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import cls from './InputText.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultValue?: string | number;
  id?: string;
  isDarkMode?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  rounded?: boolean;
  roundedLeftSide?: boolean;
  roundedRightSide?: boolean;
  type?: 'text' | 'number';
  value?: string | number;
  withForm?: boolean;
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validationHandler?: ValidationHandler;
}

export const InputText: FC<InputProps> = (props) => {
  const {
    className,
    defaultValue,
    disabled,
    isDarkMode = false,
    name = 'field',
    placeholder,
    required = false,
    rounded = false,
    roundedLeftSide = false,
    roundedRightSide = false,
    type = 'text',
    value,
    onChange,
    onBlur,
    onFocus,
    validationHandler,
  } = props;

  const t = useTranslations();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inputClasses = classNames(cls.InputText, {
    [cls.InputTextDark]: isDarkMode,
    [cls.InputTextError]: error,
    [cls.rounded]: rounded,
    [cls.roundedLeftSide]: roundedLeftSide,
    [cls.roundedRightSide]: roundedRightSide,
  });

  const renderInputField = ({ input, meta }: any) => {
    setError(!!meta.error && meta.touched && meta.submitFailed);
    setErrorMessage(meta.error || '');

    const inputProps: Record<string, any> = {
      className: inputClasses,
      defaultValue: defaultValue,
      disabled: disabled,
      placeholder: required ? `${placeholder} *` : placeholder,
      type: type,
      onBlur,
      onFocus,
    };

    if (value !== undefined) {
      inputProps.value = value;
    }

    return (
      <input
        {...input}
        {...inputProps}
        onChange={(e) => {
          input.onChange(e);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          input.onBlur(e);
          if (onBlur) {
            onBlur(e);
          }
        }}
      />
    );
  };

  return (
    <Label hasError={error} error={errorMessage} className={className}>
      <Field
        name={name}
        validate={(value) =>
          getValidationMessage(value, required, t, validationHandler)
        }>
        {renderInputField}
      </Field>
    </Label>
  );
};

InputText.displayName = 'InputText';
