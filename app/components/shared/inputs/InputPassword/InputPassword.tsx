import React, { FC, InputHTMLAttributes, ChangeEvent, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage, TranslateFunction } from '@utils/validations';
import { Label } from '../Label/Label';
import cls from './InputPassword.module.scss';

export enum InputType {
	PASSWORD = 'password',
	TEXT = 'text',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	name: string;
	value: string;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	validationHandler?: (value: string, t: TranslateFunction) => string | void;
}

export const InputPassword: FC<InputProps> = (props) => {
	const {
		id,
		name = 'field',
		disabled,
		placeholder,
		onFocus,
		onBlur,
		required = false,
		validationHandler,
	} = props;
	const [type, setType] = useState(InputType.PASSWORD);
	const [showEyeIcon, setShowEyeIcon] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();

	const toggleEyeIcon = () => {
		setShowEyeIcon(!showEyeIcon);
		const suffixType =
			type === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD;
		setType(suffixType);
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<input
				{...input}
				id={id}
				className={cls.InputPassword}
				type={type}
				placeholder={placeholder}
				autoComplete='off'
				disabled={disabled}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		);
	};

	return (
		<Label
			suffix={
				<button
					type='button'
					className={cls.InputSuffix}
					onClick={toggleEyeIcon}>
					{showEyeIcon ? (
						<span className='icon-eye-blocked'></span>
					) : (
						<span className='icon-eye'></span>
					)}
				</button>
			}
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
