import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import cls from './InputTextarea.module.scss';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	name: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onFocus?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea: FC<TextareaProps> = (props) => {
	const { id, name, onFocus, onBlur, placeholder, disabled } = props;
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<textarea
				{...input}
				className={cls.InputTextarea}
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
			<Field name={name}>{renderInputField}</Field>
		</Label>
	);
};
