import React, { FC, useState, InputHTMLAttributes } from 'react';
import cls from './InputNumber.module.scss';
import { ButtonBase } from '../../ButtonBase';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onNumberChange: (value: number) => void;
}

export const InputNumber:FC<InputProps> = (props) => {
  const {
    value = 0,
    onNumberChange
  } = props;

  const [numberValue, setNumberValue] = useState<number>(value);

  const handleDecrement = () => {
    if (numberValue >= 1) {
      setNumberValue(numberValue - 1);
      onNumberChange(numberValue);
    }
  }

  const handleIncrement = () => {
    setNumberValue(numberValue + 1);
    onNumberChange(numberValue);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setNumberValue(newValue);
    onNumberChange(newValue);
  }

  return (
    <div
      className={cls.InputNumber}
    >
      <ButtonBase
        onClick={handleDecrement}
      >
        -
      </ButtonBase>
      <input
        type="number"
        value={numberValue.toString()}
        onChange={handleChange}
      />
      <ButtonBase
        onClick={handleIncrement}
      >
        +
      </ButtonBase>
    </div>
  )
}