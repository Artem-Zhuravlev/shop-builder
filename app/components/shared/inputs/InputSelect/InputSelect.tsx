'use client';
import React, { FC, useState } from 'react';
import Select from 'react-select';
import { Field } from 'react-final-form';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { Label } from '../Label/Label';
import { InputSelectStyles } from './InputSelectStyles';
import cls from './InputSelect.module.scss';

interface SelectProps<
	Option = unknown,
	IsMulti extends boolean = false,
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
	value: object;
	label?: string;
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
		value,
		label,
	} = props;

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const renderInputField = ({ input, ...rest }: any) => {
		setError(!!rest.meta.error && rest.meta.touched && rest.meta.submitFailed);
		setErrorMessage(rest.meta.error || '');

		const select = (
			<Select
				{...input}
				{...rest}
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
				placeholder={placeholder}>
				{renderInputField}
			</Field>
		</Label>
	);
};
