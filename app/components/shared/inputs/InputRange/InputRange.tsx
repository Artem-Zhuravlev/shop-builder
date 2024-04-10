import React, { FC } from 'react';
import Slider, { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './InputRange.scss';

interface InputRangeProps extends SliderProps {
	className?: string;
}

export const InputRange: FC<InputRangeProps> = (props) => {
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
		pushable,
		className,
		onChangeComplete,
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
