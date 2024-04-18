'use client';
import React, { FC, ReactNode, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage, TranslateFunction } from '@utils/validations';
import { Label } from '../Label/Label';
import cls from './InputCheckbox.module.scss';

interface InputCheckboxProps {
	id?: string;
	label: ReactNode;
	name: string;
	required?: boolean;
	className?: string;
	value?: boolean;
	checked?: boolean;
	suffix?: ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	validationHandler?: (value: string, t: TranslateFunction) => string | void;
}

export const InputCheckbox: FC<InputCheckboxProps> = (props) => {
	const {
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

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<label className={cls.InputCheckbox}>
				<input
					{...input}
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
					{suffix && <div className={cls.InputCheckboxSuffix}>{suffix}</div>}
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
