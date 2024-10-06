'use client';
import React, { type FC } from 'react';
import { getValidationMessage } from '@/utils/validations';
import type { ValidationHandler } from '@/utils/validations/types';
import { useTranslations } from 'next-intl';
import { Field } from 'react-final-form';
import type { GroupBase, OptionsOrGroups } from 'react-select';
import { Label } from '../Label/Label';
import { InputSelectStyles } from './InputSelectStyles';
import { InputSelectAdapter } from './InputSelectAdapter';

export type SelectOption = {
	value: string | number;
	label: string | number;
};

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
	value?: SelectOption;
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

	const t = useTranslations();

	return (
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
			}
		>
			{({ input, meta, ...rest }) => {
				return (
					<Label
						hasError={!!meta.error && meta.touched}
						error={meta.error}
						className={className}
					>
						<InputSelectAdapter
							input={input}
							meta={meta}
							label={label}
							{...rest} // Spread rest props here
						/>
					</Label>
				);
			}}
		</Field>
	);
};

InputSelect.displayName = 'InputSelect';
