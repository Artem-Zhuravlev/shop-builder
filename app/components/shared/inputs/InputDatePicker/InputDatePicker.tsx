import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Field } from 'react-final-form';
import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import { Label } from '../Label/Label';
import cls from './InputDatePicker.module.scss';

export interface InputDatePickerProps extends ReactDatePickerProps {
	className?: string;
	name: string;
	required?: boolean;
	validationHandler?: ValidationHandler;
	placeholder: string;
}

export const InputDatePicker: FC<InputDatePickerProps> = (props) => {
	const {
		className,
		dateFormat = 'yyyy-MM-dd',
		name,
		placeholder,
		required = false,
		validationHandler,
	} = props;
	const t = useTranslations();
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const inputClasses = classNames(cls.InputDatePicker, {
		[cls.InputTextError]: error,
	});

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<>
				<ReactDatePicker
					selected={input.value}
					onFocus={(e) => input.onFocus(e)}
					onChange={(e) => input.onChange(e)}
					onBlur={(e) => input.onBlur(e)}
					className={inputClasses}
					closeOnScroll
					popperClassName={cls.Popper}
					placeholderText={required ? `${placeholder} *` : placeholder}
					dateFormat={dateFormat}
				/>
			</>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}
			className={className}>
			<Field
				name={name}
				validate={(value) => {
					getValidationMessage(
						value.toString(),
						required,
						t,
						validationHandler
					);
				}}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputDatePicker.displayName = 'InputDatePicker';
