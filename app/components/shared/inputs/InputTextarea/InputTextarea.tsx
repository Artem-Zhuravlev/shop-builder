import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import { getValidationMessage, TranslateFunction } from '@utils/validations';
import cls from './InputTextarea.module.scss';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	name: string;
	required?: boolean;
	validationHandler?: (value: string, t: TranslateFunction) => string | void;
	onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onFocus?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea: FC<TextareaProps> = (props) => {
	const {
		disabled,
		id,
		name,
		placeholder,
		required = false,
		onBlur,
		onFocus,
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
					getValidationMessage(value, required, t, validationHandler)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};
