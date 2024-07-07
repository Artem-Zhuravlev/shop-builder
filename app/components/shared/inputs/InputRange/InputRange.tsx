import Slider, { type SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import type { FC } from 'react';
import './InputRange.scss';

interface InputRangeProps extends SliderProps {
  className?: string;
}

export const InputRange: FC<InputRangeProps> = (props) => {
  const {
    autoFocus,
    className,
    count,
    defaultValue,
    disabled,
    max,
    min,
    pushable,
    range,
    step,
    value,
    onChange,
    onChangeComplete,
    onBlur,
    onFocus,
  } = props;

  return (
    <Slider
      disabled={disabled}
      autoFocus={autoFocus}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
      allowCross={false}
      range={range}
      count={count}
      min={min}
      max={max}
      step={step}
      value={value}
      defaultValue={defaultValue}
      pushable={pushable}
      className={className}
    />
  );
};

InputRange.displayName = 'InputRange';
