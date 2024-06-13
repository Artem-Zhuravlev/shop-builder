'use client';
import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import cls from './InputTextarea.module.scss';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	required?: boolean;
	validationHandler?: ValidationHandler;
	onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea: FC<TextareaProps> = (props) => {
	const {
		disabled,
		name,
		placeholder,
		required = false,
		onBlur,
		onChange,
		validationHandler,
	} = props;

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();

	const inputClasses = classNames(cls.InputTextarea, {
		[cls.InputTextareaError]: error,
	});

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<textarea
				{...input}
				className={inputClasses}
				onChange={(e) => {
					input.onChange(e);
					if (onChange) {
						onChange(e);
					}
				}}
				onBlur={(e) => {
					input.onBlur(e);
					if (onBlur) {
						onBlur(e);
					}
				}}
				placeholder={required ? `${placeholder}*` : placeholder}
				disabled={disabled}
			/>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}>
			<Field
				name={name}
				validate={(value) =>
					getValidationMessage(value, required, t, validationHandler)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputTextarea.displayName = 'InputTextarea';
