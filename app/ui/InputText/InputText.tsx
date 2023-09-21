import React, { FC, InputHTMLAttributes, useCallback, useState } from 'react';
import { Field } from 'react-final-form';
import cls from './InputText.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withForm?: boolean;
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
}) => {
  const [initialValue, setInitialValue] = useState(value);
  const handleInputChange = useCallback((e:any) => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    onChange(newValue);
  }, [onChange]);

  return withForm ? (
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
      value={initialValue}
      onChange={handleInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}