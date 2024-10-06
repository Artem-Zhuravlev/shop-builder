'use client';
import { getValidationMessage } from '@/utils/validations';
import type { ValidationHandler } from '@/utils/validations/types';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, {
	type ChangeEvent,
	type FC,
	type InputHTMLAttributes,
	useState,
} from 'react';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import cls from './InputText.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	defaultValue?: string | number;
	id?: string;
	isDarkMode?: boolean;
	label?: string;
	name: string;
	prefix?: string;
	required?: boolean;
	rounded?: boolean;
	roundedLeftSide?: boolean;
	roundedRightSide?: boolean;
	type?: 'text' | 'number';
	value?: string | number;
	withForm?: boolean;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	validationHandler?: ValidationHandler;
}

const InputTextAdapter: FC<{
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
}> = ({
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

export const InputText: FC<InputProps> = (props) => {
	const {
		className,
		defaultValue,
		disabled,
		isDarkMode = false,
		name = 'field',
		placeholder,
		prefix,
		required = false,
		rounded = false,
		roundedLeftSide = false,
		roundedRightSide = false,
		type = 'text',
		value,
		onChange,
		onBlur,
		onFocus,
		validationHandler,
	} = props;

	const t = useTranslations();
	const inputClasses = classNames(cls.InputText, {
		[cls.InputTextDark]: isDarkMode,
		[cls.rounded]: rounded,
		[cls.roundedLeftSide]: roundedLeftSide,
		[cls.roundedRightSide]: roundedRightSide,
		[cls.withPrefix]: prefix,
	});

	return (
		<Field
			name={name}
			validate={(value) =>
				getValidationMessage(value, required, t, validationHandler)
			}
		>
			{({ input, meta }) => (
				<Label
					hasError={!!meta.error && meta.touched}
					error={meta.error}
					className={className}
					prefix={prefix}
				>
					<InputTextAdapter
						input={input}
						meta={meta}
						className={inputClasses}
						defaultValue={defaultValue}
						disabled={disabled}
						required={required}
						type={type}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						placeholder={placeholder}
					/>
				</Label>
			)}
		</Field>
	);
};

InputText.displayName = 'InputText';
