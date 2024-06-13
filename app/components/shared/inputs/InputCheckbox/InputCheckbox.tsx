'use client';
import React, { FC, ReactNode, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import { Label } from '../Label/Label';
import cls from './InputCheckbox.module.scss';
import classNames from 'classnames';

interface InputCheckboxProps {
	disabled?: boolean;
	id?: string;
	label: ReactNode;
	name: string;
	required?: boolean;
	className?: string;
	suffix?: ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	validationHandler?: ValidationHandler;
}

export const InputCheckbox: FC<InputCheckboxProps> = (props) => {
	const {
		disabled,
		label,
		name,
		required = false,
		className,
		suffix,
		onChange,
		validationHandler,
	} = props;

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();
	const inputCheckboxClasses = classNames(cls.InputCheckbox, { disabled });

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<label className={inputCheckboxClasses}>
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
				<div className={cls.InputCheckboxLabel}>
					{label}
					{suffix}
				</div>
			</label>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}
			className={className}>
			<Field
				name={name}
				type='checkbox'
				validate={(value) => {
					if (value) {
						getValidationMessage(value, required, t, validationHandler);
					}
				}}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputCheckbox.displayName = 'InputCheckbox';
