import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import cls from './InputTextarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea:FC<TextareaProps> = (props) => {
  const {
    id,
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    disabled
  } = props;

  const [initialValue, setInitialValue] = useState(value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    onChange(newValue);
  };

  return (
    <textarea
      className={cls.InputTextarea}
      name={name}
      id={id}
      value={initialValue}
      onChange={handleInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
    ></textarea>
  )
}