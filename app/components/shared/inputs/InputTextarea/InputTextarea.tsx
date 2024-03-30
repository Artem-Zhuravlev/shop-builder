import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import cls from './InputTextarea.module.scss';
import { getValidationMessage } from '@utils/validations';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	name: string;
	required?: boolean;
	onFocus?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	validationHandler?: (value: string) => string | void;
}

export const InputTextarea: FC<TextareaProps> = (props) => {
	const {
		id,
		name,
		onFocus,
		onBlur,
		placeholder,
		disabled,
		required = false,
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
				name={name}
				id={id}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
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
					getValidationMessage(
						value,
						required,
						t('field_error.required'),
						validationHandler
					)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};
