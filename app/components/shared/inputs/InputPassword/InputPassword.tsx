'use client';
import React, { FC, InputHTMLAttributes, ChangeEvent, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage, TranslateFunction } from '@utils/validations';
import { Label } from '../Label/Label';
import cls from './InputPassword.module.scss';
import classNames from 'classnames';

export enum InputType {
	PASSWORD = 'password',
	TEXT = 'text',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	additionalValue?: string;
	name: string;
	value?: string;
	required?: boolean;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	validationHandler?: (
		value: string,
		t: TranslateFunction,
		additionalValue?: string
	) => string | void;
}

export const InputPassword: FC<InputProps> = (props) => {
	const {
		additionalValue,
		name = 'field',
		disabled,
		placeholder,
		required = false,
		onBlur,
		onFocus,
		validationHandler,
	} = props;

	const [type, setType] = useState(InputType.PASSWORD);
	const [showEyeIcon, setShowEyeIcon] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();

	const inputClasses = classNames(cls.InputPassword, {
		[cls.InputPasswordError]: error,
	});

	const toggleEyeIcon = () => {
		setShowEyeIcon(!showEyeIcon);
		const suffixType =
			type === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD;
		setType(suffixType);
	};

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<input
				{...input}
				className={inputClasses}
				type={type}
				placeholder={required ? `${placeholder} *` : placeholder}
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
					onClick={toggleEyeIcon}
					aria-label={showEyeIcon ? t('base.hide') : t('base.show')}>
					<span className={showEyeIcon ? 'icon-eye-blocked' : 'icon-eye'} />
				</button>
			}
			hasError={error}
			error={errorMessage}>
			<Field
				name={name}
				validate={(value) =>
					getValidationMessage(
						value,
						required,
						t,
						validationHandler,
						additionalValue
					)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputPassword.displayName = 'InputPassword';
