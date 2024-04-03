import React, { FC, InputHTMLAttributes, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Field } from 'react-final-form';
import { getValidationMessage } from '@utils/validations';
import { TranslateFunction } from '@utils/validations/types/TranslateFunction';
import cls from './InputText.module.scss';
import { Label } from '../Label/Label';
import classNames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	name: string;
	withForm?: boolean;
	label?: string;
	required?: boolean;
	isDarkMode?: boolean;
	roundedLeftSide?: boolean;
	roundedRightSide?: boolean;
	rounded?: boolean;
	onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	validationHandler?: (value: string, t: TranslateFunction) => string | void;
	className?: string;
}

export const InputText: FC<InputProps> = ({
	name = 'field',
	required = false,
	disabled,
	placeholder,
	isDarkMode = false,
	roundedLeftSide = false,
	roundedRightSide = false,
	rounded = false,
	onFocus,
	onBlur,
	validationHandler,
	className,
}) => {
	const t = useTranslations();
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const inputClasses = classNames(cls.InputText, {
		[cls.InputTextError]: error,
		[cls.InputTextDark]: isDarkMode,
		[cls.roundedLeftSide]: roundedLeftSide,
		[cls.roundedRightSide]: roundedRightSide,
		[cls.rounded]: rounded,
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<input
				{...input}
				className={inputClasses}
				type='text'
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
			hasError={error}
			error={errorMessage}
			className={className}>
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
