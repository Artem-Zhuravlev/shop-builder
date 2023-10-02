import React, { FC, InputHTMLAttributes, useState } from 'react';
import { Field } from 'react-final-form';
import cls from './InputPassword.module.scss';
import { Label } from '../Label/Label';

export enum InputType {
  PASSWORD = 'password',
  TEXT = 'text'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withForm?: boolean;
  label: string;
}

export const InputPassword:FC<InputProps> = ({
  id,
  name = 'field',
  value,
  disabled,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  withForm = true,
  label
}) => {
  const [initialValue, setInitialValue] = useState(value);
  const [type, setType] = useState(InputType.PASSWORD);
  
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    onChange(newValue);
  };

  const handleSuffixClick = () => {
    const suffixType = type === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD;
    setType(suffixType);
  };

  return (
    <Label
      name={label}
      onSuffixClick={handleSuffixClick}
    >
      {
        withForm ? (
          <Field
            name={name}
          >
            {
              ({ input }) => (
                <input
                  {...input}
                  className={cls.InputPassword}
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  disabled={disabled}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />  
              )
            }
          </Field>
        ) : (
          <input
            className={cls.InputPassword}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
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