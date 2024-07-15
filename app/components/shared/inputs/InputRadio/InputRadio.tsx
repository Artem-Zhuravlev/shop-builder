'use client';
import classNames from 'classnames';
import type React from 'react';
import { memo, type FC, type ReactNode } from 'react';
import { Field } from 'react-final-form';
import cls from './InputRadio.module.scss';

export interface InputRadioProps {
	label?: ReactNode;
	name: string;
	suffix?: ReactNode;
	value: string | number;
	disabled?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadio: FC<InputRadioProps> = memo((props) => {
	const { label, name, suffix, value, onChange, disabled = false } = props;
	const radioClasses = classNames(cls.InputRadio, {
		[cls.withSuffix]: !!suffix,
		disabled,
	});

	const renderInputField = ({ input }: any) => {
		return (
			<input
				{...input}
				disabled={disabled}
				className='sr-only'
				onChange={(e) => {
					input.onChange(e);
					if (onChange) {
						onChange(e);
					}
				}}
			/>
		);
	};

	return (
		<label className={radioClasses}>
			<Field name={name} type='radio' value={value} component='input'>
				{renderInputField}
			</Field>

			<div className={cls.InputRadioLabel}>
				{label || value}
				{suffix}
			</div>
		</label>
	);
});

InputRadio.displayName = 'InputRadio';
