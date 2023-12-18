import React, { FC, InputHTMLAttributes, useState } from 'react';
import { Field } from 'react-final-form';
import cls from './InputText.module.scss';
import { Label } from '../Label/Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withForm?: boolean;
  label?: string;
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
  label
}) => {
  const [initialValue, setInitialValue] = useState(value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    onChange(newValue);
  };

  return (
    <Label
      name={label}
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
                  className={cls.InputText}
                  type="text"
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
            className={cls.InputText}
            type="text"
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete='false'
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