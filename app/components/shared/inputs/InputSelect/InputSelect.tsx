import React, { FC } from 'react';
import Select from 'react-select';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { InputSelectStyles } from './InputSelectStyles';

interface SelectProps<
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
> {
	isClearable?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	isMulti?: IsMulti;
	isSearchable?: boolean;
	name: string;
	options: OptionsOrGroups<Option, Group>;
	placeholder: string;
	value: object;
}

export const InputSelect: FC<SelectProps> = (props) => {
	const {
		isClearable,
		isDisabled,
		isLoading,
		isMulti,
		isSearchable,
		name,
		options,
		placeholder,
		value,
	} = props;

	return (
		<Select
			styles={InputSelectStyles}
			options={options}
			isDisabled={isDisabled}
			isLoading={isLoading}
			isClearable={isClearable}
			isSearchable={isSearchable}
			isMulti={isMulti}
			value={value}
			defaultValue={value}
			menuPlacement='auto'
			name={name}
			placeholder={placeholder}
		/>
	);
};
