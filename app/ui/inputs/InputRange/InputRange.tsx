import React, { FC } from 'react';
import Slider, { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import  './InputRange.scss';

export const InputRange:FC<SliderProps> = (props) => {
  const {
    disabled,
    autoFocus,
    onFocus,
    onBlur,
    onChange,
    range,
    count,
    min,
    max,
    step,
    value,
    defaultValue,
    pushable
  } = props;

  return (
    <Slider
      disabled={disabled}
      autoFocus={autoFocus}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      range={range}
      count={count}
      min={min}
      max={max}
      step={step}
      value={value}
      defaultValue={defaultValue}
      pushable={pushable}
    />
  )
}