'use client';
import { getValidationMessage } from '@/utils/validations';
import type { ValidationHandler } from '@/utils/validations/types';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { type ChangeEvent, type FC, type ReactNode } from 'react';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import cls from './InputCheckbox.module.scss';
import { InputCheckboxAdapter } from './InputCheckboxAdapter';

interface InputCheckboxProps {
	disabled?: boolean;
	id?: string;
	label: ReactNode;
	name: string;
	required?: boolean;
	className?: string;
	suffix?: ReactNode;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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

	const t = useTranslations();
	const inputCheckboxClasses = classNames(cls.InputCheckbox, { disabled });

	return (
		<Field
			name={name}
			type='checkbox'
			validate={(value) => {
				if (value) {
					getValidationMessage(value, required, t, validationHandler);
				}
			}}
		>
			{({ input, meta }) => (
				<Label
					hasError={!!meta.error && meta.touched}
					error={meta.error}
					className={className}
				>
					<InputCheckboxAdapter
						className={inputCheckboxClasses}
						input={input}
						disabled={disabled}
						label={label}
						suffix={suffix}
						onChange={onChange}
					/>
				</Label>
			)}
		</Field>
	);
};

InputCheckbox.displayName = 'InputCheckbox';
