import React, { FC } from 'react';
import Select from 'react-select';
import { GroupBase, OptionsOrGroups  } from 'react-select';
import { InputSelectStyles } from './InputSelectStyles';

interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  options: OptionsOrGroups<Option, Group>;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: IsMulti;
  value: object;
  name: string;
  placeholder: string;
}

export const InputSelect: FC<SelectProps> = (props) => {
  const {
    options,
    isDisabled,
    isLoading,
    isClearable,
    isSearchable,
    isMulti,
    value,
    name,
    placeholder
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
      menuPlacement="auto"
      name={name}
      placeholder={placeholder}
    />
  );
};
