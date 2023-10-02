import React, { InputHTMLAttributes, FC, useId, useState } from "react";
import cls from './InputRadio.module.scss';
import { classNames } from "../../../utils/classNames/classNames";

interface InputProps {
  name: string;
  items: string[];
  value: string;
  onChange: (value: string, selectedRadio: string) => void;
}

export const InputRadio:FC<InputProps> = (props) => {
  const {
    name,
    items,
    onChange,
    value
  } = props;
  const id = useId();
  const [selectedRadio, setSelectedRadio] = useState<string>(value);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedRadio(value);
    onChange(value, selectedRadio);
  };

  return (
    <div
      className={classNames(cls.RadioGroup)}
    >
      {items && items.map((label, index) => (
        <label
          className={cls.InputRadio}
          key={`${id}-${index}`}
        >
          <input
            type="radio"
            name={name}
            value={label}
            checked={label === selectedRadio}
            onChange={handleRadioChange}
          />
          <div className={cls.InputRadioLabel}>
            {label}
          </div>
        </label>
      ))}
    </div>
  )
}