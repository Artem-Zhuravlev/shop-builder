'use client';
import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ValidationHandler } from '@utils/validations/types';
import Select from 'react-select';
import { Field } from 'react-final-form';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { getValidationMessage } from '@utils/validations';
import { Label } from '../Label/Label';
import { InputSelectStyles } from './InputSelectStyles';
import cls from './InputSelect.module.scss';
// TODO: investigate CSSObject
// import { CSSObject } from '@emotion/styled';

interface SelectProps<
	Option = unknown,
	IsMulti extends boolean = false | true,
	Group extends GroupBase<Option> = GroupBase<Option>,
> {
	className?: string;
	isClearable?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	isMulti?: IsMulti;
	isSearchable?: boolean;
	name: string;
	options: OptionsOrGroups<Option, Group>;
	placeholder: string;
	required?: boolean;
	value?: { value: string | number; label: string | number };
	label?: string;
	validationHandler?: ValidationHandler;
}

export const InputSelect: FC<SelectProps> = (props) => {
	const {
		className,
		isClearable,
		isDisabled,
		isLoading,
		isMulti,
		isSearchable,
		name,
		options,
		placeholder,
		required = false,
		value,
		label,
		validationHandler,
	} = props;

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();

	const renderInputField = ({ input, ...rest }: any) => {
		setError(!!rest.meta.error && rest.meta.touched && rest.meta.submitFailed);
		setErrorMessage(rest.meta.error || '');

		const select = (
			<Select
				{...input}
				{...rest}
				className={error ? cls.InputSelectError : ''}
			/>
		);

		return label ? (
			<label className={cls.InputSelectLabel}>
				{label}
				<div className={cls.InputSelectContainer}>{select}</div>
			</label>
		) : (
			select
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}
			className={className}>
			<Field
				name={name}
				options={options}
				styles={InputSelectStyles}
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isSearchable={isSearchable}
				isMulti={isMulti}
				value={value}
				defaultValue={value}
				menuPlacement='auto'
				placeholder={placeholder}
				validate={(value) =>
					getValidationMessage(value, required, t, validationHandler)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputSelect.displayName = 'InputSelect';
