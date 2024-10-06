import React, { type FC, type ChangeEvent } from 'react';
import classNames from 'classnames';
import cls from './InputText.module.scss';

interface InputTextAdapterProps {
	input: any;
	meta: any;
	className: string;
	defaultValue: string | number | undefined;
	disabled: boolean | undefined;
	placeholder: string | undefined;
	required: boolean;
	type: 'text' | 'number' | undefined;
	value: string | number | undefined;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextAdapter: FC<InputTextAdapterProps> = ({
	input,
	meta,
	className,
	defaultValue,
	disabled,
	placeholder,
	required,
	type,
	value,
	onChange,
	onBlur,
	onFocus,
}) => {
	const hasError = !!meta.error && meta.touched;

	return (
		<input
			{...input}
			className={classNames(className, { [cls.InputTextError]: hasError })}
			defaultValue={defaultValue}
			disabled={disabled}
			placeholder={required ? `${placeholder} *` : placeholder}
			type={type}
			value={value !== undefined ? value : input.value}
			onChange={(e) => {
				input.onChange(e);
				if (onChange) onChange(e);
			}}
			onBlur={(e) => {
				input.onBlur(e);
				if (onBlur) onBlur(e);
			}}
			onFocus={onFocus}
		/>
	);
};
